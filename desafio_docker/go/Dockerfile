FROM golang:alpine AS basego

RUN apk update && apk add --no-cache git
WORKDIR $GOPATH/src/mypackage/myapp/
COPY . .
RUN go build -o /go/bin/hello

FROM scratch

COPY --from=basego /go/bin/hello /go/bin/hello
COPY main.go .

ENTRYPOINT ["/go/bin/hello"]
CMD [ "go run main.go" ]