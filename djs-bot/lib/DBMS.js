const Bot = require('./Bot');

const { PrismaClient } = require('@prisma/client');
require("dotenv").config({ path: "../.env" });

class PrismaManager extends PrismaClient {
	/**
	 * DataBase Management System (DBMS) wrapper for the Prisma ORM
	 * @param {Bot} client 
	 */
	constructor(client) {
		super({
			log: ["query", "info", "warn", "error"], errorFormat: "pretty",
			datasources: { db: { url: process.env.DATABASE_URL } } //- not really needed but it's here for reference
		});
		client.log(`Prisma ORM has been loaded`);
	}
}

module.exports = PrismaManager;