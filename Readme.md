# 勤怠管理システムのテストリポジトリ

- モノレポ構成試す
- 全部 TypeScript で作成するとどれだけ効率的なのか？など試す

## 簡易説明

- apps/fe --- フロントエンド Remix
- apps/be --- バックエンド hono
- docker-compose --- MySQL と MinIO

# FE/BE モノレポ

- turbo を使用したモノレポ化
- https://turbo.build/repo/docs

## 初回実行

- リポジトリルートにて下記コマンド

```
npm i
```

## 開発サーバの起動

- リポジトリルートにて下記コマンド

```
npm run dev
```

# Docker 系

## MySQL

- DB 登録用

## MinIO

- S3 モック、ファイル追加する用途

## Justfile 　（コマンドランナー）

- https://github.com/casey/just?tab=readme-ov-file

### Docker 起動

- npx just up

### Docker 停止

- npx just down
