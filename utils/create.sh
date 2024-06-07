#!/bin/sh
openssl genpkey -algorithm RSA -out key.pem -pkeyopt rsa_keygen_bits:2048
openssl req -new -x509 -days 365 -key key.pem -out cert.pem -config cert_config.txt #Make sure to have cert_config.txt (custom certificate settings)
openssl pkcs12 -export -out certificate.p12 -inkey key.pem -in cert.pem

