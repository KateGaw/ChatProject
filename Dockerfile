FROM node:12.18.1-alpine

LABEL version="1.2.1"
LABEL repository="https://github.com/KateGaw/ChatProject"
LABEL homepage="https://github.com/KateGaw/ChatProject"
LABEL maintainer="Kate Gaw <KateGaw@github.com>"

LABEL com.github.actions.name="Chat project"
LABEL com.github.actions.description=""
LABEL com.github.actions.icon="package"
LABEL com.github.actions.color="gray-dark"

# git is now required when install firebase-tools
RUN apk update && apk upgrade && apk add --no-cache git

RUN npm install -g firebase-tools

COPY LICENSE README.md /
COPY "entrypoint.sh" "/entrypoint.sh"

ENTRYPOINT ["/entrypoint.sh"]
CMD ["--help"]