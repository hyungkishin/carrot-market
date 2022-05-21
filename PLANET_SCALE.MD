## PlanetScale
- planetScale 을 MySql 과 호환되는 serverless 데이터 베이스 플랫폼이다.
- 이게 뭐냐면, 데이터 베이스 플랫폼이라는건 ? 데이터베이스를 제공해 준다는 의미이고, serverless 라는건, 정말로 서버가 없다는게 아니라, 서버를 우리가 유지할 필요가 없다는 것이다.
- serverless 는 우리가 서버를 관리하고, 유지보수 할 필요가 없다는 뜻이다.
- 단, 이것이 AWS 의 RDS (관계형 데이터베이스 서비스) 같은 건 아니다. (왜냐면, 서버를 만들어야 하고, 적당한 크기를 설정하는 등 모든 걸 직접해야 하기 때문이다.)
    - 예를 들어 백만 명이 내 데이터베이스에 연결되면 직접 scaling 해줘야 한다.
    - 근데, 이 serverless 플랫폼을 사용하면 그런 작업을 대신 해준다.
    - 안정성을 신뢰 할 수 있는거고, 굉장히 좋은 일이다.
- planetScale 은 mysql 을 쓰는게 아니라, MySql 이랑 호환되는 뭔가를 사용해서 The MySql-compatible serverless database planet 이라고 공식문서에 소개되어있다.

- vacumming, rebalancing, scaling 을 할 필요도 없고, query Planning 도 없고, downTime 도 없다. (downTime 이 없다는건, DB가 안꺼진단 얘기다)
- Vitess 는 가장 Scailing 이 뛰어난 오픈소스 데이터베이스다. ( 유튜브를 scale 하기 위해 구글이 만든것이다 .)
    - SQL 데이터베이스를 하나만 갖고 있어도 많은 유저들을 위해서 엄청 많은 일을 할것인데, 
    - 예를들어 이렇다. 매초 수백만 개의 쿼리를 처리해야 되고, 수십만 개의 연결이 들어오고, 수만 개의 노드가 필요하다면, 여기서 부턴 좀 어려워진다.
    - 데이터베이스에 horizontal scaling 도 해야되고, sharding 도 해야되고, DB 가 맛이 가지 않도록 유지해야되는 조정들이 많다는것이다.
    - Vitess 는 이런것들을 해결해주기 위해 나왔다. 유튜브, 네이버, 트위터, Slack, 에어비엔비 등등!!!
    - Horizontal Scale (샤딩 이 가능하다),  High Availability 는 데이터베이스의 복사본을 저장해둔다는 의미이다.
        - 복사본에 failure 가 일어나도 괜찮도록. 데이터를 여러 장소에 복사한다는 의미이다.
    - Schema Migration 이라는 훌륭한 기술도 있다.
- PlanetScale 을 쓰기 좋은게, 마치 git 을 쓰는것 처럼 데이터베이스를 다룰수 있다는 점이다. ( 훌륭한 CLI 가 있어서. :) )
    - 예를들어 데이터베이스에 User 라는 새 model 을 추가 하려 한다면, 모두가 사용하는 메인 데이터베이스를 수정하는 대신 데이터베이스에 branch 를 수정할 수 있다.
    - 그 branch 에서 Schema 도 바꾸고, 새 model 도 만들고, fields 도 수정하고, 원하는 수정을 다 했다면, schema 를 옮기는 것인데, 그걸 알아서 해준다.
    - 마치 merge 처럼 :) branch 를 이용해서 100 퍼센트 스키마 변경을 자동으로 배포 해준다고 해서 정말 개쩌는 기능이다.
    - 시나리오 : main 에서 dev 브런치 따서 dev 에 user 스키마 올렸어. 이거 써도 될것같아. 그러면 main 에 merge 해도 되겠네 ! merge 때려 ! 그러면 downTime (디비 껏다가 다시 킬 필요 없이! 배포하거나 migration 하는것이다. 개 훌륭함. )

### setting 은 여기서 ! 시키는대로 하면되!
> https://docs.planetscale.com/concepts/planetscale-environment-setup
나는 맥 유저니깐 터미널에서 아래 1 ~ 2 까지 진행 ! 
1. brew install planetscale/tap/pscale
2. brew install mysql-client

pscale 에 로그인을 해보자.
1. 콘솔에 pscale auth login !
2. 브라우저에 뜬 숫자가 터미널에 있는 숫자랑 같은지 "확인" 만 해주고 confirm code 라는 버튼을 클릭해주자.
3. 다시 터미널로 돌아와서 Successfully logged in. 이 뜨면 성공 ! 
4. pscale region list 를 입력 ! 

```text
  NAME (9)                            SLUG                 ENABLED  
 ----------------------------------- -------------------- --------- 
  AWS us-east-1 (Northern Virginia)   us-east              Yes      
  AWS us-west-2 (Oregon)              us-west              Yes      
  AWS eu-west-1 (Dublin)              eu-west              Yes      
  AWS ap-south-1 (Mumbai)             ap-south             Yes      
  AWS ap-southeast-1 (Singapore)      ap-southeast         Yes      
  AWS ap-northeast-1 (Tokyo)          ap-northeast         Yes      
  AWS eu-central-1 (Frankfurt)        eu-central           Yes      
  AWS ap-southeast-2 (Sydney)         aws-ap-southeast-2   Yes      
  AWS sa-east-1 (Sao Paulo)           aws-sa-east-1        Yes   
```


