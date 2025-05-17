# Django

Django는 MVT 구조를 사용합니다.

## MVT 패턴

Model, View, Controller

- Model: 데이터 베이스에 저장되는 데이터와 관련된 부분 정의 / DB 스키마와 비즈니스 규칙.
- View: 프로그램 로직이 동작하여 데이터를 가공, 처리한 결과를 템플릿에 전달. 요청-응답 흐름과 로직을 담당. (전통 MVC의 Controller 역할).
- Template: 사용자에게 보여지는 UI 부분

Django 프레임워크 자체가 URL -> View 매핑 / 미들웨어를 담당하므로 별도 Controller 파일이 없습니다.

## 0. 시작하기

장고 프로젝트 시작할때:

```terminal
django-admin startproject todo_proj .
```

## 1. 모델 - 데이터베이스 정의

모델은 사용될 데이터에 대한 정의를 담고 있는 장고의 클래스.
ORM 기법 사용. ORM은 객체와 관계형 데이터베이스를 연결해주는 역할을 함.

e.g.

```python
from django.db import models

class Person(models.Model):
    name = models.CharField(max_length=30)
    phone_number = models.CharField(max_length=50)
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

```terminal
python manage.py makemigrations # 데이터베이스 변경사항,  0001_initial.py 생성
python manage.py migrate # 데이터베이스 변경사항 반영
```

## 2. URL 정의

클라이언트로부터 URL 요청을 받으면, 장고는 `urls.py` 파일에 정의된 URL 패턴과 매칭되는지 분석.

### 1) 실제 프로젝트 내 URL 설계 / 작동 원리

- 요청받은 URL은 가장 먼저 최상위 프로젝트 포더 내의 `urls.py`로 접근
- 최상위 URLconf의 urlpatterns 리스트 변수에 path 메서드로 URL 패턴 지정
- URL 패턴이 매칭되면 호출할 View 지정

요청받은 URL이 프로젝트 내의 `urls.py`로 접근 가능한 방법

```python
# django_project/settings.py 
ROOT_URLCONF = 'django_project.urls'
```

ROOT_URLCONF를 통해 `urls.py`로 이동

```python
# django_project/urls.py
from django.contrib import admin 
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('myapp/', include('myapp.urls')),
]
```

프로젝트를 생성하면, 관리자 페이지를 제공.
프로젝트 내의 `urls.py`를 보면 코드가 미리 작성되어 있음.
요청된 URL이 .../admin/ 이면 path('admin/', admin.site.urls)에 매칭이 되어 있고 장고의 admin앱에 사이트가 호출.

### 2) 개별 애플리케이션마다 URL 분리, 계층적 URL 패턴 설계

URLconf 모듈을 개별 애플리케이션 단위로 계층적인 URL 패턴 설계 가능.

- 기본 형태
- API 집합
- 버전별
- tasks 앱

### 3) 최상위 ROOT_URLconf와 분리하는 방법

app의 urls를 가져오기 위해 `from django.urls import` 에서 include 함수 추가, path에서 요청 받은 url을 하위의 URLconf에게 처리 위임.

```python
# django_project/urls.py

from django.contrib import admin 
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('myapp/', include('myapp.urls')),
]
```

### 4) 템플릿에서 하드코딩된 URL 제거: URL 패턴 이름 사용

```python
{% for post in posts %}
  <li>
    <a href="{% url 'myapp:detail' post.id %}">  <!-- /myapp/… 대신 -->
      {{ post.title }}
    </a>
  </li>
{% endfor %}
```

### 5) 이름 공간 정하기

```python
# django_project/myapp/urls.py

app_name = 'myapp'

urlpatterns = [
    path('detail_list/<int:post_id>/', views.detail, name='detail'),
]
```

## 3. View - 로직 정의

URL에 매핑된 뷰가 호출되면 뷰는 해당 애플리케이션의 로직에 맞는 처리를 함. 그 결과를 HTML로 변환하기 위해 템플릿 처리. 최종 HTML로 된 응답 데이터를 웹 클라이언트한테 반환.

```python
from django.http import HttpResponse
import datetime

def current_datetime(request): 
    now = datetime.datetime.now() 
    html = f"<html><body>It is now {now}.</body></html>" 
    return HttpResponse(html)
```

```python
# ────────── Class-Based View 예시 ──────────
from django.views.generic import ListView
from .models import Post

class PostListView(ListView):
    model = Post
    template_name = 'blog/post_list.html'
    context_object_name = 'posts_box'
```

제네릭 CBV를 쓰면 CRUD 화면을 수십 줄 → 한두 줄로 단축할 수 있음.

```html
<!-- detail.html -->
<form actions="{% url 'polls:vote' question.id %}" method="post">

```

```python
# urls.py
path('polls/<int:question_id>/vote/', views.vote, name='vote')

# POST 데이터를 처리하는 views.py
from django.http import HttpResponseRedirect

def vote(request, question_id):
    
    ...
    # 폼 데이터 처리 후, 결과를 보여주는 페이지로 리다이렉트
    return HttpResponseRedirect(reverse('polls:results', args=(question.id,)))
```

템플릿에 있는 폼을 제출하면, URL이 POST 방식으로 넘어오고
urls.py에서 URL에 맞는 처리 함수 (View)를 연결해줌.

```python
from .models import Post 
from django.shortcuts import render

def post_list(request):
    posts = Post.objects.all()
    context = {
        'posts_box': posts,
    }
    return render(request, 'blog/post_list.html', context)
```

예시: blog/post_list.html

```html
{% for p in posts_box %}
    <li>{{ p.title }}</li>
{% endfor %}
```

```python
from django import forms
from .models import Post

class PostForm(forms.ModelForm):
    class Meta:
        model  = Post
        fields = ['title', 'content']
```

`request.POST`를 직접 만지는 대신 폼 클래스로 검증 / CSRF 방어를 한번에 처리.

## 4. Template - 화면 UI 정의

View로부터 전달받은 데이터를 템플릿에 적용하여 HTML를 만드는데 사용.

Template은 HTML 파일이고, App폴더/templates/App명/템플릿 파일처럼,
각 App 폴더 밑에 templates 서브 폴더를 만들고 다시 그 안에 App 명을 사용하여 서브 폴더를 만든 후 템플릿 파일을 그 안에 넣기 권장.

```html
<body>
    <h1>{{ posts_box }}</h1>
</body>

# 템플릿 테그 {% %}
{% for item in dataList %}
    <li>{{ item }}</li>
{% endfor %}
```

### 4-1. 정적 / 업로드 파일.

1. **STATICFILES_DIRS / STATIC_URL** : CSS·JS 배포용 collectstatic후 Nginx, S3 등에 서빙.
2. **MEDIA_ROOT / MEDIA_URL** : 사용자가 업로드한 이미지 저장 > 개발 단계에서는python manage.py runserver가 자동 서빙하지만, 운영 환경에서는 S3 + CloudFront 같은 스토리지를 별도로 두는 것이 일반적입니다.

## 5. Rest API (Django REST Framework)

### 1. DRF Serializer

```python
# serializers.py
from rest_framework import serializers
from .models import Post 

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ['id', 'title', 'created_at']
```

모바일, React 클라이언트를 위한 JSON API가 필요할 때 Django Rest Framework를 붙이고,
URL -> ViewSet -> Serializer -> Model 흐름으로 확장.

### 2. `views_api.py`

```python
from rest_framework.viewsets import ModelViewSet
from .models import Post 
from .serializers import PostSerializer

class PostViewSet(ModelViewSet):
    """
    /api/posts/ (GET, POST)
    /api/posts/{id}/ (GET, PUT/PATCH, DELETe)
    """
    queryset = Post.objects.all().order_by('-created_at')
    serializer_class = PostSerializer
```

### 3. `urls_api.py`

```python
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views_api import PostViewSet

router = DefaultRouter()
router.register(r'posts', PostViewSet, basename='post')

urlpatterns = [
    path('api/', include(router.urls)),
]
```

더 공부거리:

- CBV mixin,
- LoginRequiredMixin / PermissionRequiredMixin
- Celery + Redis, select_related/prefetch_related, pytest-django


참고:
https://bentist.tistory.com/49
https://codemte.tistory.com/41
