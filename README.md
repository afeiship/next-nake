# next-nake

## installation
```bash
npm install -S afeiship/next-nake --registry=https://registry.npm.taobao.org
```

## apis
| api      | description             |
| -------- | ----------------------- |
| task     | Register a task         |
| run      | Run task, an entrypoint |
| parallel | Run task parallel       |
| series   | Run task series         |

+ nake.task      (register a task)
+ nake.run       (run task, an entrypoint)
+ nake.parallel  (Run task race)
+ nake.series    (Run task one by one)

## usage
```js
import NxNake from 'next-nake';

// code goes here:
```

## resources
- https://github.com/ezekielchentnik/preact-pwa/blob/master/build.js
