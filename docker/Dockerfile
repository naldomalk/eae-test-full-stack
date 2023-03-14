FROM mongo:latest
COPY data-seed.json /data-seed.json
CMD mongoimport --host mongo --db dataEAE --collection jobs --drop --file /data-seed.json --jsonArray