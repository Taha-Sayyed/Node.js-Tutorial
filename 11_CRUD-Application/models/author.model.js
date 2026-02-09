const {pgTable,uuid,varchar,text}=require('drizzle-orm/pg-core');

const authorsTable = pgTable("authors", {
    id: uuid().primaryKey().defaultRandom(),
    firstName: varchar({ length: 255 }).notNull(),
    lastName: varchar({ length: 255 }).notNull(),
    email:varchar({length:255}).notNull().unique()
});

module.exports={
    authorsTable
}