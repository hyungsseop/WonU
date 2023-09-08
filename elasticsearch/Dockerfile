ARG ELASTIC_VERSION

# https://www.docker.elastic.co/
FROM docker.elastic.co/elasticsearch/elasticsearch:${ELASTIC_VERSION}

# Add your elasticsearch plugins setup here
RUN cd /usr/share/elasticsearch/bin/
RUN bin/elasticsearch-plugin install analysis-nori