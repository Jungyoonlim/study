# Django

## MVT 패턴

Model, View, Controller

- Model: 데이터 베이스에 저장되는 데이터와 관련된 부분 정의
- View: 프로그램 로직이 동작하여 데이터를 가공, 처리한 결과를 템플릿에 전달
- Template: 사용자에게 보여지는 UI 부분

## 1. 모델 - 데이터베이스 정의

모델은 사용될 데이터에 대한 정의를 담고 있는 장고의 클래스.
ORM 기법 사용. ORM은 객체와 관계형 데이터베이스를 연결해주는 역할을 함.

e.g.

```python
from django.db import models

class Person(models.Model):
    name = models.CharField(max_length=30)
    phone_name = models.CharField(max_length=50)
```

ORM -->

```sql
CREATE TABLE person (
        'id' serial NOT NULL PRIMARY KEY,
        'name' varchar(30) NOT NULL,
        'phone_number' varchar(50) NOT NULL 
);
```

테이블을 하나의 클래스로 정의.
테이블의 컬럼은 클래스의 변수 (속성)으로 매핑함.

데이터베이스 변경사항 반영

```python
python manage.py makemigrations # 데이터베이스 변경사항 
python manage.py migrate # 데이터베이스 변경사항 반영
```

## 2. URL 정의
