# .envファイルを読み込む
set dotenv-load := true

# mysql/minioの起動
up:
	docker-compose up -d

# mysql/minioの停止
down:
	docker-compose down

ps:
  docker ps

# コンテナが起動している前提、mysqlに入る
mysql:
	docker-compose exec -it db bash -c "mysql -u ${MYSQL_USER} -p${MYSQL_PASSWORD}"

# コンテナが起動している前提、mysqlにrootユーザで入る
mysql-root:
	docker-compose exec -it db bash -c "mysql -u root -p${MYSQL_ROOT_PASS}"