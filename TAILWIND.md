### JIT
> 예전의 tailwind 3.0 이전 버전에서는, 매우매우 큰 css 파일이 있었고, 배포전에 "실제 사용" 된 class 만을 가지고 사용하지 않은 css 들은 전부 버렸었다. 이과정을 purging (퍼징) 이라고 하는데, 3.0 부터는 Just In Time (JIT) 컴파일러는 실시간으로 감시하면서 필요한 클래스를 생성하는것을 의미한다. 