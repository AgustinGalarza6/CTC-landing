import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-sqlite'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  // 0. Clean up any leftover temp table from a previous failed attempt
  await db.run(sql`DROP TABLE IF EXISTS \`__new_products_downloads\`;`)

  // 1. Create new table with file_id nullable + external_url column
  await db.run(sql`CREATE TABLE \`__new_products_downloads\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`name\` text NOT NULL,
  	\`type\` text NOT NULL,
  	\`file_id\` integer,
  	\`external_url\` text,
  	\`size\` text,
  	FOREIGN KEY (\`file_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`products\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );`)

  // 2. Copy existing data (external_url defaults to NULL)
  await db.run(sql`INSERT INTO \`__new_products_downloads\` (\`_order\`, \`_parent_id\`, \`id\`, \`name\`, \`type\`, \`file_id\`, \`size\`)
  SELECT \`_order\`, \`_parent_id\`, \`id\`, \`name\`, \`type\`, \`file_id\`, \`size\`
  FROM \`products_downloads\`;`)

  // 3. Swap tables
  await db.run(sql`DROP TABLE \`products_downloads\`;`)
  await db.run(sql`ALTER TABLE \`__new_products_downloads\` RENAME TO \`products_downloads\`;`)

  // 4. Recreate indexes
  await db.run(sql`CREATE INDEX \`products_downloads_order_idx\` ON \`products_downloads\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`products_downloads_parent_id_idx\` ON \`products_downloads\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`products_downloads_file_idx\` ON \`products_downloads\` (\`file_id\`);`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  // Revert: recreate table with file_id NOT NULL, remove external_url
  await db.run(sql`CREATE TABLE \`__new_products_downloads\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`name\` text NOT NULL,
  	\`type\` text NOT NULL,
  	\`file_id\` integer NOT NULL,
  	\`size\` text,
  	FOREIGN KEY (\`file_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`products\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );`)
  await db.run(sql`INSERT INTO \`__new_products_downloads\` (\`_order\`, \`_parent_id\`, \`id\`, \`name\`, \`type\`, \`file_id\`, \`size\`)
  SELECT \`_order\`, \`_parent_id\`, \`id\`, \`name\`, \`type\`, \`file_id\`, \`size\`
  FROM \`products_downloads\`;`)
  await db.run(sql`DROP TABLE \`products_downloads\`;`)
  await db.run(sql`ALTER TABLE \`__new_products_downloads\` RENAME TO \`products_downloads\`;`)
  await db.run(sql`CREATE INDEX \`products_downloads_order_idx\` ON \`products_downloads\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`products_downloads_parent_id_idx\` ON \`products_downloads\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`products_downloads_file_idx\` ON \`products_downloads\` (\`file_id\`);`)
}
