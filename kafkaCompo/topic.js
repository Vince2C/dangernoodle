const Kafka = require('kafkajs').Kafka;
run();

async function run() {
    try {
        const kafka = new Kafka({
            clientId: 'myapp',
            brokers: ['janes-mbp:9092']
        });

        const admin = kafka.admin();
        console.log('Connecting...');
        await admin.connect();
        console.log('Connected!');
        // adding a param to createTopics can add the functionality of creating any num of topics
        await admin.createTopics({
            waitForLeaders: true,
            topics: [
                {
                    topic: 'Users',
                    numPartitions: 2,
                }, 

                {
                    topic: ""
                }
            ]
        });
        console.log('Created Successfully!');
        await admin.disconnect();
    } catch (ex) {
        console.error(`An error occurred ${ex}`);
    } finally {
        process.exit(0);
    }
}
