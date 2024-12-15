```
npm install
npm run dev
```

```
open http://localhost:3000
```

## Prisma セットアップ

### mysql を Docker で起動

```
cd attendance-management-system
npx just up
npx just ps
npx just mysql-root
```

- mysql-root は mysql に root ユーザで入る
- mysql 内で database を追加

```
mysql> show databases;
mysql> create database ams;
mysql> show databases; // 増えていることを確認
```

- 追加した database に対し、一般ユーザで入ることができるようにする

```
GRANT ALL PRIVILEGES ON *.* TO 'user'@'%'; // 権限追加
FLUSH PRIVILEGES;
SHOW GRANTS FOR 'user'@'%'; // 権限が追加されていることを確認
```

- ams のみの権限だと、シャドウデータベースを作成できない。

### test 用の database を作成

```
create database ams_test;
show databases; // 増えていることを確認
```
