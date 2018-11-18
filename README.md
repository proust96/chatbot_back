# chatbot_back

Allows the front end to query our IBM Watson Assistant for the Capgemini Hackathon.

This is a small API that links our webapp to our IBM workspace. Having this small server as an intermediary allows us to decouple the processing from the display and to filter some parts of the response.

To use it, we need to make a POST request to http://localhost:3000/ask, with a JSON body containing the input and the context.

The answer is composed of the reply from the assistant, but also an intent detection with a confidence value, some user defined entities and a new context.

To design our Assitant, we created Intents (what does the user want to achieve), Entities (some keywords it learns to recognize) and a Dialog flow (what to ask, what to answer...).


Thanks a lot to Grégoire Marnotte and his article https://medium.com/wolox-driving-innovation/watson-and-node-an-efficient-way-to-set-up-a-chatbot-6606a5a9f29a that helped us a lot to setup this Node connector.
