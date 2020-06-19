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

```
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