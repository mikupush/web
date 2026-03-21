.PHONY: docker-image docker-image-publish


docker-image:
	docker build \
		-t mikupush/web:latest \
		-t mikupush/web:$$(cat VERSION) \
		--platform linux/arm64,linux/amd64 .

docker-image-publish:
	docker push mikupush/web:latest; \
	docker push mikupush/web:$$(cat VERSION)
