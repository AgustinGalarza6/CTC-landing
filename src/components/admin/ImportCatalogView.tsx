'use client';

import { useState, useRef } from 'react';

type ImportResults = {
    created: number;
    updated: number;
    unchanged: number;
    errors: string[];
};

export default function ImportCatalogView() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle');
    const [results, setResults] = useState<ImportResults | null>(null);
    const fileRef = useRef<HTMLInputElement>(null);

    async function handleImport() {
        const file = fileRef.current?.files?.[0];
        if (!file) {
        alert('Seleccioná un archivo CSV primero.');
        return;
    }

    setStatus('loading');
    setResults(null);

    const formData = new FormData();
    formData.append('file', file);

    try {
        const res = await fetch('/api/import-catalog', { method: 'POST', body: formData });
        const data = await res.json();

        if (!res.ok) {
            setStatus('error');
            setResults({ created: 0, updated: 0, unchanged: 0, errors: [data.error ?? 'Error desconocido'] });
            return;
        }

        setResults(data);
        setStatus(data.errors?.length > 0 ? 'error' : 'done');
        if (fileRef.current) fileRef.current.value = '';
        } catch (err) {
        setStatus('error');
        setResults({ created: 0, updated: 0, unchanged: 0, errors: [String(err)] });
        }
    }

    return (
        <div style={{
        background: '#1a1d23',
        border: '1px solid #2e3340',
        borderRadius: '10px',
        padding: '20px 24px',
        marginBottom: '24px',
        }}>
        {/* Header */}
        <div style={{ marginBottom: '16px' }}>
            <h2 style={{ margin: '0 0 5px', fontSize: '14px', fontWeight: 700, color: '#e2e8f0', letterSpacing: '0.02em' }}>
            GESTIÓN DE CATÁLOGO
            </h2>
            <p style={{ margin: 0, color: '#64748b', fontSize: '12.5px', lineHeight: '1.5' }}>
            Importá desde el Google Sheet o Excel — los productos existentes solo completan campos vacíos, no se reemplaza lo que ya está cargado.
            </p>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: '#2e3340', marginBottom: '16px' }} />

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
            {/* Selector de archivo */}
            <label style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: '#252830',
            border: '1px solid #2e3340',
            borderRadius: '7px',
            padding: '8px 14px',
            cursor: 'pointer',
            fontSize: '13px',
            color: '#94a3b8',
            transition: 'border-color 0.15s',
            }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14,2 14,8 20,8"/>
            </svg>
            <span id="file-label">Seleccionar CSV…</span>
            <input
                ref={fileRef}
                type="file"
                accept=".csv"
                style={{ display: 'none' }}
                onChange={() => {
                const name = fileRef.current?.files?.[0]?.name;
                const label = document.getElementById('file-label');
                if (label) label.textContent = name ?? 'Seleccionar CSV…';
                }}
            />
            </label>

            {/* Botón importar */}
            <button
            onClick={handleImport}
            disabled={status === 'loading'}
            style={{
                background: status === 'loading' ? '#334155' : '#3b5bdb',
                color: status === 'loading' ? '#64748b' : '#fff',
                border: 'none',
                padding: '9px 18px',
                borderRadius: '7px',
                fontSize: '13px',
                fontWeight: 600,
                cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                whiteSpace: 'nowrap',
                display: 'flex',
                alignItems: 'center',
                gap: '7px',
                letterSpacing: '0.01em',
            }}
            >
            {status === 'loading' ? (
                <>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                </svg>
                Importando…
                </>
            ) : (
                <>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="17,8 12,3 7,8"/>
                    <line x1="12" y1="3" x2="12" y2="15"/>
                </svg>
                Importar CSV
                </>
            )}
            </button>

            {/* Botón exportar */}
            <a
            href="/api/export-catalog"
            download
            style={{
                background: '#134e2a',
                color: '#4ade80',
                border: '1px solid #166534',
                padding: '9px 18px',
                borderRadius: '7px',
                textDecoration: 'none',
                fontSize: '13px',
                fontWeight: 600,
                whiteSpace: 'nowrap',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '7px',
                letterSpacing: '0.01em',
            }}
            >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7,10 12,15 17,10"/>
                <line x1="12" y1="3" x2="12" y2="15"/>
            </svg>
            Exportar catálogo
            </a>
        </div>

        {/* Resultados */}
        {results && (
            <div style={{
            marginTop: '16px',
            padding: '12px 16px',
            borderRadius: '8px',
            background: status === 'error' ? '#1f1215' : '#0f1f17',
            border: `1px solid ${status === 'error' ? '#7f1d1d' : '#14532d'}`,
            fontSize: '12.5px',
            lineHeight: '1.7',
            }}>
            {status === 'done' && (
                <p style={{ margin: '0 0 8px', fontWeight: 700, color: '#4ade80', fontSize: '13px' }}>
                Importación completada
                </p>
            )}
            {status === 'error' && results.errors.length > 0 && results.created === 0 && results.updated === 0 ? (
                <p style={{ margin: '0', fontWeight: 700, color: '#f87171' }}>
                {results.errors[0]}
                </p>
            ) : (
                <>
                <p style={{ margin: '2px 0', color: '#94a3b8' }}>
                    Productos creados: <strong style={{ color: '#e2e8f0' }}>{results.created}</strong>
                </p>
                <p style={{ margin: '2px 0', color: '#94a3b8' }}>
                    Campos vacíos completados: <strong style={{ color: '#e2e8f0' }}>{results.updated}</strong>
                </p>
                <p style={{ margin: '2px 0', color: '#94a3b8' }}>
                    Sin cambios: <strong style={{ color: '#e2e8f0' }}>{results.unchanged}</strong>
                </p>
                {results.errors.length > 0 && (
                    <div style={{ marginTop: '10px' }}>
                    <p style={{ margin: '0 0 6px', fontWeight: 700, color: '#f87171', fontSize: '12px' }}>
                        Errores ({results.errors.length}):
                    </p>
                    <div style={{
                        maxHeight: '120px',
                        overflowY: 'auto',
                        background: '#1f1215',
                        borderRadius: '5px',
                        padding: '8px 10px',
                    }}>
                        {results.errors.map((e, i) => (
                        <p key={i} style={{
                            margin: '2px 0',
                            color: '#fca5a5',
                            fontFamily: 'monospace',
                            fontSize: '11px',
                        }}>
                            {e}
                        </p>
                        ))}
                    </div>
                    </div>
                )}
                </>
            )}
            </div>
        )}
        </div>
    );
}
