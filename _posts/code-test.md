---
title: '코드가 잘 표시되는지 테스트 해봅니다..'
excerpt: 'gatsby에 비해서 사용자를 위한 플러그인이 약한 Nextjs에서는 코드 하일라이트 부분이 어떻게 표시되는지 테스트 해봅니다.'
coverImage: '/assets/blog/code-test/cover.jpg'
date: '2020-06-19T23:55:07.322Z'
author:
  name: Woosung Choi
  picture: '/assets/blog/authors/woosung.png'
ogImage:
  url: '/assets/blog/code-test/cover.jpg'
---

gatsby에 비해서 사용자를 위한 플러그인이 약한 Nextjs에서는 코드 하일라이트 부분이 어떻게 표시되는지 테스트 해봅니다.

## *코드는 표시될까요?*

```javascript
ssl_certificate /etc/letsencrypt/live/yoursitename/fullchain.pem; # 이 경로도 인증서 만들때 중요했던, 그 경로로 바꾸세요.
ssl_certificate_key /etc/letsencrypt/live/yoursitename/privkey.pem; # 이 경로도 인증서 만들때 중요했던, 그 경로로 바꾸세요.
ssl_trusted_certificate /etc/letsencrypt/live/yoursitename/chain.pem;  # 이 경로도 인증서 만들때 중요했던, 그 경로로 바꾸세요.

ssl_dhparam snippets/dhparams.pem;
ssl_session_cache shared:SSL:10m;
ssl_session_timeout 1d;
ssl_session_tickets off;

ssl_ecdh_curve X25519:sect571r1:secp521r1:secp384r1;
ssl_stapling on;
ssl_stapling_verify on;
resolver 8.8.8.8 8.8.4.4 valid=300s;
resolver_timeout 10s;

ssl_protocols TLSv1.2 TLSv1.3;
ssl_prefer_server_ciphers off;
ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384;

add_header X-Frame-Options SAMEORIGIN;
add_header X-Content-Type-Options nosniff;
add_header X-XSS-Protection "1; mode=block";     
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload";
```

잘 표시가 되는지 궁금하네요!

음.. 코드만 잘 표시되면 충분히 실사용할 수 있을 것 같은데요!!!

어떻게 하면 될까요? 정말 고민입니다!

일단 CSS를 자체 삽입하여 구현은 했습니다.

원래 prism이나 코드 하일라이터를 구현하려고 했지만... 능력 부족으로 ㅠㅠ 다음에 시도해보도록 하겠습니다.

---

\styles\index.css 

현재는 위 경로에

```css
pre{color:#fff;font-family:Consolas,Menlo,Monaco,source-code-pro,"Courier New",monospace;padding:20px;border-radius:5px;overflow-x:auto;background:#27292a;font-feature-settings:normal;white-space:pre;word-spacing:normal;word-break:normal;line-height:1.5;tab-size:4;hyphens:none}
```

위와 같은 코드를 제일 밑에 넣어뒀습니다. 수동으로 검은 배경과 흰색 글자, 둥근 모서리 처리해뒀습니다. ㅎㅎ