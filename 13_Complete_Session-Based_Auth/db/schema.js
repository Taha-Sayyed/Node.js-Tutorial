const {uuid,pgTable,varchar,text,timestamp}=require('drizzle-orm/pg-core');

exports.userTable=pgTable('users',{
    id:uuid().primaryKey().defaultRandom(),
    name:varchar({length:255}).notNull(),
    email:varchar({length:255}).notNull().unique(),
    password:text().notNull(),
    salt:text().notNull(),
});

exports.userSessions=pgTable('user_session',{
    id:uuid().primaryKey().defaultRandom(),
    userId:uuid()
    .references(()=>this.userTable.id)
    .notNull(),
    createdAt:timestamp().defaultNow().notNull(),
});