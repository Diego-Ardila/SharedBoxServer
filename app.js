require("dotenv").config({path: __dirname + '/.env.dev'})
const express = require ("express")
const cors = require("cors")
const lenderRouter = require("./routes/lender.route")
const dateReservedRouter = require("./routes/datesReserved.route")
const spaceRouter = require("./routes/space.route")
const spaceTagsRouter = require("./routes/spaceTag.route")
const questionsAnswersRouter = require("./routes/questionsAnswers.route")
const tenantRouter = require("./routes/tenant.route")
const scoreRouter = require("./routes/score.route")
const subscriptionRouter = require("./routes/subscription.route")
const elementRouter = require("./routes/element.route")
const notificationRouter = require("./routes/notification.route")
const morgan = require("morgan")
const helmet = require("helmet")


//stablish DB connection
const db = require("./config/dbConnection")
db() 
const app = express()
//setUp express app
app.use(express.json())
app.use(cors({
    exposedHeaders:['Content-Pages','Content-Total']
}))
app.use(morgan("common"))
app.use(helmet())

//setUp all routers
app.use("/lender", lenderRouter)

app.use("/dates", dateReservedRouter)

app.use("/space", spaceRouter)

app.use("/spaceTags", spaceTagsRouter)

app.use("/queAns", questionsAnswersRouter)

app.use("/tenant", tenantRouter)

app.use("/score", scoreRouter)

app.use("/subscription", subscriptionRouter)
app.use("/element", elementRouter)

app.use("/notification", notificationRouter)

module.exports = app
