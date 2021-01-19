module.exports = {
	/* The token of your Discord Bot */
	token: "TOKEN",
	/* For the support server */
	support: {
		id: "758784114831786065", // The ID of the support server
		logs: "798188518446071808", // And the ID of the logs channel of your server (new servers for example)
	},
	/* Dashboard configuration */
	dashboard: {
		enabled: false, // whether the dashboard is enabled or not
		secret: "SECRET", // Your discord client secret
		baseURL: "https://dashboard.atlanta-bot.fr", // The base URl of the dashboard
		logs: "798188518446071808", // The channel ID of logs
		port: 8080, // Dashboard port
		expressSessionPassword: "5KingsOT", // Express session password (it can be what you want)
		failureURL: "https://www.atlanta-bot.fr" // url on which users will be redirected if they click the cancel button (discord authentication)
	},
	mongoDB: "mongodb+srv://cluster0.3scco.mongodb.net/AtlantaBot", // The URl of the mongodb database
	prefix: "*", // The default prefix for the bot
	/* For the embeds (embeded messages) */
	embed: {
		color: "#0091fc", // The default color for the embeds
		footer: "5Kings eSports | 2021" // And the default footer for the embeds
	},
	/* Bot's owner informations */
	owner: {
		id: "405700031069552654", // The ID of the bot's owner
		name: "Nika.#0001" // And the name of the bot's owner
	},
	/* DBL votes webhook (optional) */
	votes: {
		port: 5000, // The port for the server
		password: "XXXXXXXXXXX", // The webhook auth that you have defined on discordbots.org
		channel: "XXXXXXXXXXX" // The ID of the channel that in you want the votes logs
	},
	/* The API keys that are required for certain commands */
	apiKeys: {
		// BLAGUE.XYZ: https://blague.xyz/
		blagueXYZ: "XXXXXXXXXXX",
		// FORTNITE TRN: https://fortnitetracker.com/site-api
		fortniteTRN: "XXXXXXXXXXX",
		// FORTNITE FNBR: https://fnbr.co/api/docs
		fortniteFNBR: "XXXXXXXXXXX",
		// DBL: https://discordbots.org/api/docs#mybots
		dbl: "XXXXXXXXXXX",
		// AMETHYSTE: https://api.amethyste.moe
		amethyste: "XXXXXXXXXXX",
		// SENTRY: https://sentry.io (this is not required and not recommended - you can delete the field)
		sentryDSN: "XXXXXXXXXXX"
	},
	/* The others utils links */
	others: {
		github: "xxxxxxx", // Founder's github account
		donate: "xxxxxxx" // Donate link
	},
	/* The Bot status */
	status: [
		{
			name: "#5KingsOT",
			type: "LISTENING"
		},
		{
			name: "Status: Not Connected To DB",
			type: "PLAYING"
		}
	]
};