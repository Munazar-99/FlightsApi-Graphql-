import { Client } from '@elastic/elasticsearch'
import * as dotenv from 'dotenv'
dotenv.config()

export const client = new Client({
  cloud: { id: process.env.CLOUDID },
  auth: { 
    username: process.env.USER_NAME,
    password: process.env.PASSWORD
   }
})

client.ping()
  .then(response => console.log("You are connected to Elasticsearch!"))
  .catch(error => console.error("Elasticsearch is not connected."))