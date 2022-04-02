const { Kafka } = require("kafkajs")
const fs = require("fs")
const clientId="spd";
// the client ID lets kafka know who's producing the messages
// we can define the list of brokers in the cluster
// this is the topic to which we want to write messages
const topic = "message-log"
// initialize a new kafka client and initialize a producer from it
const kafka = new Kafka({
  clientId: clientId,
  brokers: ['dev.speedemployer.gr:3003', 'dev.speedemployer.gr:3004'],
  ssl: {
    rejectUnauthorized: true,
    ca: [fs.readFileSync('/etc/letsencrypt/live/dev.speedemployer.gr/fullchain.pem', 'utf-8')],
    key: fs.readFileSync('/etc/letsencrypt/live/dev.speedemployer.gr/privkey.pem', 'utf-8'),
    cert: fs.readFileSync('/etc/letsencrypt/live/dev.speedemployer.gr/cert.pem', 'utf-8')
  },
})

const producer = kafka.producer()

// we define an async function that writes a new message each second
const produce = async () => {
	await producer.connect()
	let i = 0
	// after the produce has connected, we start an interval timer
	setInterval(async () => {
		try {
			// send a message to the configured topic with
			// the key and value formed from the current value of `i`
			await producer.send({
				topic,
				messages: [
					{
						key: String(i),
						value: "this is message " + i,
					},
				],
			})
			// if the message is written successfully, log it and increment `i`
			console.log("writes: ", i)
			i++
		} catch (err) {
			console.error("could not write message " + err)
		}
	}, 1000)
}

const consumer = kafka.consumer({ groupId: clientId })
const consume = async () => {
	// first, we wait for the client to connect and subscribe to the given topic
	await consumer.connect()
	await consumer.subscribe({ topic })
	await consumer.run({
		// this function is called every time the consumer gets a new message
		eachMessage: ({ message }) => {
			// here, we just log the message to the standard output
			console.log(`received message: ${message.value}`)
		},
	})
}

// call the `produce` function and log an error if it occurs
produce().catch((err) => {
	console.error("error in producer: ", err)
})

// start the consumer, and log any errors
consume().catch((err) => {
	console.error("error in consumer: ", err)
})