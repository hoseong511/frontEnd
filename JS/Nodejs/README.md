## NVM node version manager
+ 프로젝트 단위 별로 노드 버전 관리에 유용함
```sh
nvm --version
nvm ls
nvm install 버전
nvm use 버전
nvm uninstall 버전
```

## NPM node package manager
+ 다양한 기능(패키지, 모듈)

## parcel index.html
+ parcel index.html이 터미널에서 동작되지 않는이유!!!!
+ 프로젝트 폴더 내에서만 동작되므로 실행 시 package.json에 접근을 해서 parcel 명령어를 실행시켜야 함.
+ build를 통해 코드 난독화함!
  브라우저가 코드를 읽을 수 있는 형태로 띄어쓰기를 제거함. 

## 유의적 버전 Semantic Versioning, SemVer)
  Major.Minor.Patch
  - 기존 버전과 호환되지 않는 새로운 버전; 새로운 기능이 호환되지 않음
  - Minor: 기존 버전과 호환되는 새로운 기능이 추가된 버전
  - Patch: 기존 버전과 호환되는 버그 및 오타 등이 수정된 버전.
  - ^Major.Minor.Patch: Major 버전 안에서 가장 최신 버전으로 업데이트 가능하도록 허락함! carrot 기호는 상황에 맞게 사용하자. 
  ```sh
  npm update 패키지 # ^이 없다면 업데이트가 일어나지 않음
  ```

