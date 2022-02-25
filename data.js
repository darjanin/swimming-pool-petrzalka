const input = [{"label":"2022-02-16T15:17:42.443Z","value":51},{"label":"2022-02-16T15:31:01.658Z","value":50},{"label":"2022-02-16T15:48:07.484Z","value":66},{"label":"2022-02-16T16:11:46.961Z","value":77},{"label":"2022-02-16T16:43:07.694Z","value":78},{"label":"2022-02-16T16:58:58.964Z","value":87},{"label":"2022-02-16T17:17:26.404Z","value":89},{"label":"2022-02-16T17:35:23.946Z","value":82},{"label":"2022-02-16T17:48:09.664Z","value":86},{"label":"2022-02-16T18:11:37.616Z","value":81},{"label":"2022-02-16T18:32:44.233Z","value":75},{"label":"2022-02-16T18:48:15.843Z","value":75},{"label":"2022-02-16T19:08:50.755Z","value":70},{"label":"2022-02-16T19:22:09.372Z","value":55},{"label":"2022-02-16T19:34:11.156Z","value":45},{"label":"2022-02-16T19:48:19.878Z","value":45},{"label":"2022-02-16T19:54:54.546Z","value":38},{"label":"2022-02-16T20:05:12.126Z","value":32},{"label":"2022-02-16T20:09:45.529Z","value":29},{"label":"2022-02-16T20:10:18.999Z","value":29},{"label":"2022-02-16T20:27:39.315Z","value":20},{"label":"2022-02-16T20:36:49.886Z","value":12},{"label":"2022-02-16T20:48:15.361Z","value":7},{"label":"2022-02-16T21:08:43.038Z","value":0},{"label":"2022-02-16T21:25:40.167Z","value":0},{"label":"2022-02-16T21:34:40.137Z","value":0},{"label":"2022-02-16T21:36:02.530Z","value":0},{"label":"2022-02-16T21:48:27.926Z","value":0},{"label":"2022-02-16T22:09:16.954Z","value":0},{"label":"2022-02-16T22:24:34.269Z","value":0},{"label":"2022-02-16T22:33:04.809Z","value":0},{"label":"2022-02-16T22:48:16.017Z","value":0},{"label":"2022-02-16T23:09:40.729Z","value":0},{"label":"2022-02-16T23:27:22.518Z","value":0},{"label":"2022-02-16T23:38:07.299Z","value":0},{"label":"2022-02-16T23:48:00.769Z","value":0},{"label":"2022-02-17T00:33:53.540Z","value":0},{"label":"2022-02-17T01:38:57.919Z","value":0},{"label":"2022-02-17T02:12:08.766Z","value":0},{"label":"2022-02-17T02:36:50.462Z","value":0},{"label":"2022-02-17T02:50:15.811Z","value":0},{"label":"2022-02-17T03:10:44.455Z","value":0},{"label":"2022-02-17T03:28:58.912Z","value":0},{"label":"2022-02-17T03:40:20.885Z","value":0},{"label":"2022-02-17T03:48:00.851Z","value":0},{"label":"2022-02-17T04:12:24.460Z","value":0},{"label":"2022-02-17T04:37:37.292Z","value":0},{"label":"2022-02-17T04:52:55.505Z","value":0},{"label":"2022-02-17T05:08:39.441Z","value":7},{"label":"2022-02-17T05:24:30.756Z","value":9},{"label":"2022-02-17T05:33:18.141Z","value":16},{"label":"2022-02-17T05:48:03.157Z","value":20},{"label":"2022-02-17T06:12:30.071Z","value":22},{"label":"2022-02-17T06:34:24.887Z","value":22},{"label":"2022-02-17T06:51:09.889Z","value":18},{"label":"2022-02-17T07:09:44.774Z","value":18},{"label":"2022-02-17T07:25:41.343Z","value":26},{"label":"2022-02-17T07:33:29.824Z","value":25},{"label":"2022-02-17T07:48:20.768Z","value":29},{"label":"2022-02-17T08:11:24.089Z","value":34},{"label":"2022-02-17T08:31:25.636Z","value":32},{"label":"2022-02-17T08:48:01.391Z","value":37},{"label":"2022-02-17T09:09:20.896Z","value":39},{"label":"2022-02-17T09:26:49.628Z","value":44},{"label":"2022-02-17T09:36:44.159Z","value":42},{"label":"2022-02-17T09:48:20.977Z","value":40},{"label":"2022-02-17T10:09:58.022Z","value":40},{"label":"2022-02-17T10:31:32.254Z","value":32},{"label":"2022-02-17T10:48:49.995Z","value":31},{"label":"2022-02-17T11:07:45.330Z","value":25},{"label":"2022-02-17T11:23:26.507Z","value":16},{"label":"2022-02-17T11:33:16.456Z","value":21},{"label":"2022-02-17T11:48:10.851Z","value":26},{"label":"2022-02-17T12:15:00.864Z","value":25},{"label":"2022-02-17T12:45:57.295Z","value":29},{"label":"2022-02-17T13:12:53.187Z","value":23},{"label":"2022-02-17T13:29:10.124Z","value":20},{"label":"2022-02-17T13:37:46.515Z","value":24},{"label":"2022-02-17T13:48:02.246Z","value":31},{"label":"2022-02-17T14:09:13.578Z","value":44},{"label":"2022-02-17T14:25:54.153Z","value":47},{"label":"2022-02-17T14:34:46.936Z","value":48},{"label":"2022-02-17T14:48:09.278Z","value":59},{"label":"2022-02-17T15:10:16.398Z","value":74},{"label":"2022-02-17T15:30:17.395Z","value":80},{"label":"2022-02-17T15:43:25.573Z","value":82},{"label":"2022-02-17T15:51:11.889Z","value":81},{"label":"2022-02-17T16:13:06.228Z","value":89},{"label":"2022-02-17T16:44:36.742Z","value":83},{"label":"2022-02-17T17:00:22.485Z","value":71},{"label":"2022-02-17T17:28:11.047Z","value":81},{"label":"2022-02-17T17:37:48.231Z","value":78},{"label":"2022-02-17T17:48:00.552Z","value":83},{"label":"2022-02-17T18:11:45.972Z","value":86},{"label":"2022-02-17T18:32:58.529Z","value":101},{"label":"2022-02-17T18:49:42.537Z","value":89},{"label":"2022-02-17T19:08:04.519Z","value":81},{"label":"2022-02-17T19:21:20.016Z","value":74},{"label":"2022-02-17T19:33:23.828Z","value":70},{"label":"2022-02-17T19:48:05.924Z","value":55},{"label":"2022-02-17T20:08:57.113Z","value":41},{"label":"2022-02-17T20:26:45.128Z","value":24},{"label":"2022-02-17T20:35:23.330Z","value":21},{"label":"2022-02-17T20:48:12.235Z","value":10},{"label":"2022-02-17T21:10:29.192Z","value":0},{"label":"2022-02-17T21:25:57.059Z","value":0},{"label":"2022-02-17T21:35:05.626Z","value":0},{"label":"2022-02-17T21:48:09.805Z","value":0},{"label":"2022-02-17T22:10:36.360Z","value":0},{"label":"2022-02-17T22:27:34.191Z","value":0},{"label":"2022-02-17T22:37:29.579Z","value":0},{"label":"2022-02-17T22:48:01.531Z","value":0},{"label":"2022-02-17T23:09:41.792Z","value":0},{"label":"2022-02-17T23:26:17.654Z","value":0},{"label":"2022-02-17T23:35:29.414Z","value":0},{"label":"2022-02-17T23:48:13.743Z","value":0},{"label":"2022-02-18T00:43:20.470Z","value":0},{"label":"2022-02-18T01:51:23.458Z","value":0},{"label":"2022-02-18T02:27:20.340Z","value":0},{"label":"2022-02-18T02:49:24.434Z","value":0},{"label":"2022-02-18T03:10:15.449Z","value":0},{"label":"2022-02-18T03:28:30.996Z","value":0},{"label":"2022-02-18T03:39:44.335Z","value":0},{"label":"2022-02-18T03:48:00.467Z","value":0},{"label":"2022-02-18T04:12:46.854Z","value":0},{"label":"2022-02-18T04:37:42.975Z","value":0},{"label":"2022-02-18T04:52:51.561Z","value":0},{"label":"2022-02-18T05:09:09.083Z","value":6},{"label":"2022-02-18T05:24:40.043Z","value":11},{"label":"2022-02-18T05:33:20.145Z","value":12},{"label":"2022-02-18T05:48:12.404Z","value":15},{"label":"2022-02-18T06:12:45.786Z","value":19},{"label":"2022-02-18T06:34:42.215Z","value":18},{"label":"2022-02-18T06:51:23.809Z","value":24},{"label":"2022-02-18T07:10:07.663Z","value":29},{"label":"2022-02-18T07:25:37.046Z","value":34},{"label":"2022-02-18T07:33:36.625Z","value":34},{"label":"2022-02-18T07:48:01.475Z","value":30},{"label":"2022-02-18T08:11:38.001Z","value":28},{"label":"2022-02-18T08:31:24.654Z","value":25},{"label":"2022-02-18T08:48:15.396Z","value":25},{"label":"2022-02-18T09:10:09.778Z","value":25},{"label":"2022-02-18T09:26:49.689Z","value":31},{"label":"2022-02-18T09:36:38.313Z","value":29},{"label":"2022-02-18T09:48:03.969Z","value":36},{"label":"2022-02-18T10:10:54.230Z","value":37},{"label":"2022-02-18T10:30:43.250Z","value":38},{"label":"2022-02-18T10:48:02.149Z","value":29},{"label":"2022-02-18T11:08:13.690Z","value":30},{"label":"2022-02-18T11:23:29.266Z","value":32},{"label":"2022-02-18T11:33:32.420Z","value":28},{"label":"2022-02-18T11:48:04.060Z","value":29},{"label":"2022-02-18T12:16:08.078Z","value":30},{"label":"2022-02-18T12:51:35.813Z","value":32},{"label":"2022-02-18T13:13:20.906Z","value":33},{"label":"2022-02-18T13:29:25.242Z","value":32},{"label":"2022-02-18T13:38:04.901Z","value":39},{"label":"2022-02-18T13:48:09.515Z","value":41},{"label":"2022-02-18T14:09:02.857Z","value":37},{"label":"2022-02-18T14:25:31.758Z","value":40},{"label":"2022-02-18T14:34:13.607Z","value":45},{"label":"2022-02-18T14:48:11.776Z","value":49},{"label":"2022-02-18T15:10:16.837Z","value":43},{"label":"2022-02-18T15:29:42.713Z","value":42},{"label":"2022-02-18T15:50:03.639Z","value":38},{"label":"2022-02-18T16:13:23.873Z","value":33},{"label":"2022-02-18T16:43:57.813Z","value":32},{"label":"2022-02-18T16:59:02.739Z","value":33},{"label":"2022-02-18T17:17:36.338Z","value":42},{"label":"2022-02-18T17:35:15.707Z","value":39},{"label":"2022-02-18T17:48:03.701Z","value":41},{"label":"2022-02-18T18:11:52.286Z","value":39},{"label":"2022-02-18T18:32:44.233Z","value":40},{"label":"2022-02-18T18:49:22.986Z","value":36},{"label":"2022-02-18T19:07:58.010Z","value":28},{"label":"2022-02-18T19:21:06.184Z","value":28},{"label":"2022-02-18T19:33:18.064Z","value":28},{"label":"2022-02-18T19:48:18.996Z","value":28},{"label":"2022-02-18T20:10:17.215Z","value":20},{"label":"2022-02-18T20:27:55.182Z","value":12},{"label":"2022-02-18T20:37:16.802Z","value":9},{"label":"2022-02-18T20:48:08.398Z","value":0},{"label":"2022-02-18T21:09:03.934Z","value":0},{"label":"2022-02-18T21:24:47.712Z","value":0},{"label":"2022-02-18T21:33:46.835Z","value":0},{"label":"2022-02-18T21:48:01.874Z","value":0},{"label":"2022-02-18T22:10:34.761Z","value":0},{"label":"2022-02-18T22:28:17.770Z","value":0},{"label":"2022-02-18T22:38:35.868Z","value":0},{"label":"2022-02-18T22:48:01.634Z","value":0},{"label":"2022-02-18T23:09:40.077Z","value":0},{"label":"2022-02-18T23:26:33.278Z","value":0},{"label":"2022-02-18T23:35:45.018Z","value":0},{"label":"2022-02-18T23:48:03.900Z","value":0},{"label":"2022-02-19T00:41:02.194Z","value":0},{"label":"2022-02-19T01:46:12.461Z","value":0},{"label":"2022-02-19T02:26:34.938Z","value":0},{"label":"2022-02-19T02:47:55.865Z","value":0},{"label":"2022-02-19T03:10:27.173Z","value":0},{"label":"2022-02-19T03:28:21.649Z","value":0},{"label":"2022-02-19T03:39:04.112Z","value":0},{"label":"2022-02-19T03:48:03.473Z","value":0},{"label":"2022-02-19T04:12:19.074Z","value":0},{"label":"2022-02-19T04:36:54.303Z","value":0},{"label":"2022-02-19T04:52:20.726Z","value":0},{"label":"2022-02-19T05:08:54.440Z","value":0},{"label":"2022-02-19T05:23:54.730Z","value":0},{"label":"2022-02-19T05:33:27.928Z","value":0},{"label":"2022-02-19T05:48:13.586Z","value":0},{"label":"2022-02-19T06:11:57.057Z","value":0},{"label":"2022-02-19T06:32:49.425Z","value":0},{"label":"2022-02-19T06:49:50.821Z","value":3},{"label":"2022-02-19T07:09:06.766Z","value":22},{"label":"2022-02-19T07:24:25.251Z","value":25},{"label":"2022-02-19T07:33:18.063Z","value":26},{"label":"2022-02-19T07:48:14.162Z","value":23},{"label":"2022-02-19T08:11:23.247Z","value":41},{"label":"2022-02-19T08:30:45.757Z","value":62},{"label":"2022-02-19T08:48:01.010Z","value":79},{"label":"2022-02-19T09:10:27.602Z","value":110},{"label":"2022-02-19T09:27:17.484Z","value":109},{"label":"2022-02-19T09:37:04.279Z","value":100},{"label":"2022-02-19T09:47:59.931Z","value":116},{"label":"2022-02-19T10:10:05.500Z","value":106},{"label":"2022-02-19T10:29:01.147Z","value":88},{"label":"2022-02-19T10:39:19.841Z","value":82},{"label":"2022-02-19T10:48:00.540Z","value":76},{"label":"2022-02-19T11:08:49.196Z","value":55},{"label":"2022-02-19T11:23:25.330Z","value":47},{"label":"2022-02-19T11:33:27.285Z","value":42},{"label":"2022-02-19T11:48:23.965Z","value":44},{"label":"2022-02-19T12:14:45.673Z","value":52},{"label":"2022-02-19T12:44:07.326Z","value":52},{"label":"2022-02-19T13:00:33.354Z","value":59},{"label":"2022-02-19T13:26:22.498Z","value":61},{"label":"2022-02-19T13:34:18.676Z","value":62},{"label":"2022-02-19T13:48:21.574Z","value":61},{"label":"2022-02-19T14:08:51.920Z","value":69},{"label":"2022-02-19T14:24:01.828Z","value":62},{"label":"2022-02-19T14:33:19.850Z","value":63},{"label":"2022-02-19T14:48:16.011Z","value":58},{"label":"2022-02-19T15:10:02.433Z","value":66},{"label":"2022-02-19T15:28:54.429Z","value":63},{"label":"2022-02-19T15:40:26.796Z","value":58},{"label":"2022-02-19T15:48:13.157Z","value":67},{"label":"2022-02-19T16:13:20.875Z","value":76},{"label":"2022-02-19T16:43:10.360Z","value":80},{"label":"2022-02-19T16:57:53.288Z","value":88},{"label":"2022-02-19T17:13:56.125Z","value":86},{"label":"2022-02-19T17:27:36.150Z","value":86},{"label":"2022-02-19T17:35:40.614Z","value":76},{"label":"2022-02-19T17:48:02.266Z","value":77},{"label":"2022-02-19T18:11:02.380Z","value":61},{"label":"2022-02-19T18:31:16.872Z","value":60},{"label":"2022-02-19T18:48:10.531Z","value":59},{"label":"2022-02-19T19:07:45.277Z","value":40},{"label":"2022-02-19T19:20:44.424Z","value":26},{"label":"2022-02-19T19:33:09.941Z","value":20},{"label":"2022-02-19T19:48:16.599Z","value":9},{"label":"2022-02-19T20:10:14.200Z","value":0},{"label":"2022-02-19T20:27:43.271Z","value":0},{"label":"2022-02-19T20:37:05.100Z","value":0},{"label":"2022-02-19T20:48:13.103Z","value":0},{"label":"2022-02-19T21:09:10.570Z","value":0},{"label":"2022-02-19T21:24:36.519Z","value":0},{"label":"2022-02-19T21:33:24.166Z","value":0},{"label":"2022-02-19T21:47:58.858Z","value":0},{"label":"2022-02-19T22:09:58.434Z","value":0},{"label":"2022-02-19T22:27:17.935Z","value":0},{"label":"2022-02-19T22:37:02.638Z","value":0},{"label":"2022-02-19T22:47:57.284Z","value":0},{"label":"2022-02-19T23:09:48.013Z","value":0},{"label":"2022-02-19T23:26:51.182Z","value":0},{"label":"2022-02-19T23:36:19.130Z","value":0},{"label":"2022-02-19T23:48:14.154Z","value":0},{"label":"2022-02-20T00:43:38.097Z","value":0},{"label":"2022-02-20T01:51:42.392Z","value":0},{"label":"2022-02-20T02:26:28.281Z","value":0},{"label":"2022-02-20T02:47:14.759Z","value":0},{"label":"2022-02-20T03:10:20.293Z","value":0},{"label":"2022-02-20T03:28:29.189Z","value":0},{"label":"2022-02-20T03:39:34.358Z","value":0},{"label":"2022-02-20T03:47:59.475Z","value":0},{"label":"2022-02-20T04:12:17.199Z","value":0},{"label":"2022-02-20T04:36:52.163Z","value":0},{"label":"2022-02-20T04:52:20.742Z","value":0},{"label":"2022-02-20T05:08:59.389Z","value":0},{"label":"2022-02-20T05:23:50.318Z","value":0},{"label":"2022-02-20T05:33:21.833Z","value":0},{"label":"2022-02-20T05:48:01.981Z","value":0},{"label":"2022-02-20T06:11:37.262Z","value":0},{"label":"2022-02-20T06:32:27.747Z","value":0},{"label":"2022-02-20T06:49:30.925Z","value":0},{"label":"2022-02-20T07:09:09.218Z","value":0},{"label":"2022-02-20T07:24:29.895Z","value":0},{"label":"2022-02-20T07:33:02.565Z","value":0},{"label":"2022-02-20T07:48:11.100Z","value":0},{"label":"2022-02-20T08:11:24.409Z","value":26},{"label":"2022-02-20T08:30:37.070Z","value":46},{"label":"2022-02-20T08:47:58.892Z","value":59},{"label":"2022-02-20T09:10:02.502Z","value":70},{"label":"2022-02-20T09:26:23.075Z","value":92},{"label":"2022-02-20T09:35:35.697Z","value":84},{"label":"2022-02-20T09:47:55.791Z","value":88},{"label":"2022-02-20T10:10:08.163Z","value":87},{"label":"2022-02-20T10:28:45.692Z","value":94},{"label":"2022-02-20T10:39:00.247Z","value":96},{"label":"2022-02-20T10:48:14.718Z","value":86},{"label":"2022-02-20T11:08:45.417Z","value":62},{"label":"2022-02-20T11:24:31.832Z","value":76},{"label":"2022-02-20T11:33:19.561Z","value":75},{"label":"2022-02-20T11:48:05.293Z","value":75},{"label":"2022-02-20T12:14:56.015Z","value":73},{"label":"2022-02-20T12:44:35.945Z","value":62},{"label":"2022-02-20T13:00:50.658Z","value":61},{"label":"2022-02-20T13:26:31.341Z","value":51},{"label":"2022-02-20T13:34:25.192Z","value":52},{"label":"2022-02-20T13:48:17.938Z","value":46},{"label":"2022-02-20T14:08:58.800Z","value":55},{"label":"2022-02-20T14:24:06.078Z","value":70},{"label":"2022-02-20T14:33:20.299Z","value":73},{"label":"2022-02-20T14:48:08.060Z","value":79},{"label":"2022-02-20T15:10:17.993Z","value":81},{"label":"2022-02-20T15:29:02.185Z","value":82},{"label":"2022-02-20T15:40:46.185Z","value":86},{"label":"2022-02-20T15:49:56.533Z","value":86},{"label":"2022-02-20T16:12:45.645Z","value":89},{"label":"2022-02-20T16:42:14.954Z","value":88},{"label":"2022-02-20T16:57:14.128Z","value":87},{"label":"2022-02-20T17:12:22.160Z","value":87},{"label":"2022-02-20T17:26:45.036Z","value":94},{"label":"2022-02-20T17:35:14.986Z","value":95},{"label":"2022-02-20T17:48:13.158Z","value":78},{"label":"2022-02-20T18:11:27.427Z","value":81},{"label":"2022-02-20T18:31:36.626Z","value":79},{"label":"2022-02-20T18:48:19.256Z","value":88},{"label":"2022-02-20T19:08:45.546Z","value":77},{"label":"2022-02-20T19:21:57.541Z","value":59},{"label":"2022-02-20T19:33:32.408Z","value":41},{"label":"2022-02-20T19:48:00.717Z","value":25},{"label":"2022-02-20T20:10:20.867Z","value":0},{"label":"2022-02-20T20:27:42.979Z","value":0},{"label":"2022-02-20T20:36:49.060Z","value":0},{"label":"2022-02-20T20:48:00.926Z","value":0},{"label":"2022-02-20T21:09:11.883Z","value":0},{"label":"2022-02-20T21:24:29.311Z","value":0},{"label":"2022-02-20T21:33:17.486Z","value":0},{"label":"2022-02-20T21:48:12.114Z","value":0},{"label":"2022-02-20T22:09:20.104Z","value":0},{"label":"2022-02-20T22:26:44.476Z","value":0},{"label":"2022-02-20T22:36:18.579Z","value":0},{"label":"2022-02-20T22:48:04.114Z","value":0},{"label":"2022-02-20T23:09:40.228Z","value":0},{"label":"2022-02-20T23:26:38.422Z","value":0},{"label":"2022-02-20T23:35:46.647Z","value":0},{"label":"2022-02-20T23:48:04.210Z","value":0},{"label":"2022-02-21T00:38:27.950Z","value":0},{"label":"2022-02-21T01:44:49.908Z","value":0},{"label":"2022-02-21T02:17:54.444Z","value":0},{"label":"2022-02-21T02:44:11.934Z","value":0},{"label":"2022-02-21T02:52:34.161Z","value":0},{"label":"2022-02-21T03:10:56.529Z","value":0},{"label":"2022-02-21T03:29:07.353Z","value":0},{"label":"2022-02-21T03:40:50.210Z","value":0},{"label":"2022-02-21T03:48:40.580Z","value":0},{"label":"2022-02-21T04:13:19.029Z","value":0},{"label":"2022-02-21T04:38:49.270Z","value":0},{"label":"2022-02-21T04:53:19.612Z","value":0},{"label":"2022-02-21T05:09:26.825Z","value":10},{"label":"2022-02-21T05:25:21.107Z","value":15},{"label":"2022-02-21T05:33:21.133Z","value":15},{"label":"2022-02-21T05:48:32.898Z","value":17},{"label":"2022-02-21T06:13:06.973Z","value":22},{"label":"2022-02-21T06:34:57.822Z","value":20},{"label":"2022-02-21T06:51:16.194Z","value":27},{"label":"2022-02-21T07:09:54.972Z","value":23},{"label":"2022-02-21T07:25:34.128Z","value":23},{"label":"2022-02-21T07:33:29.161Z","value":24},{"label":"2022-02-21T07:48:01.297Z","value":25},{"label":"2022-02-21T08:12:34.822Z","value":26},{"label":"2022-02-21T08:32:44.837Z","value":29},{"label":"2022-02-21T08:48:03.666Z","value":33},{"label":"2022-02-21T09:10:46.146Z","value":48},{"label":"2022-02-21T09:28:09.656Z","value":56},{"label":"2022-02-21T09:38:27.983Z","value":58},{"label":"2022-02-21T09:48:15.667Z","value":58},{"label":"2022-02-21T10:11:31.131Z","value":57},{"label":"2022-02-21T10:31:16.056Z","value":50},{"label":"2022-02-21T10:48:06.601Z","value":43},{"label":"2022-02-21T11:08:29.612Z","value":36},{"label":"2022-02-21T11:24:11.672Z","value":33},{"label":"2022-02-21T11:33:27.645Z","value":33},{"label":"2022-02-21T11:48:14.557Z","value":35},{"label":"2022-02-21T12:16:45.137Z","value":24},{"label":"2022-02-21T12:53:01.484Z","value":16},{"label":"2022-02-21T13:14:29.223Z","value":23},{"label":"2022-02-21T13:30:29.140Z","value":29},{"label":"2022-02-21T13:48:05.993Z","value":34},{"label":"2022-02-21T14:10:23.181Z","value":43},{"label":"2022-02-21T14:25:43.295Z","value":40},{"label":"2022-02-21T14:34:48.995Z","value":49},{"label":"2022-02-21T14:48:15.199Z","value":56},{"label":"2022-02-21T15:11:37.678Z","value":65},{"label":"2022-02-21T15:31:36.218Z","value":60},{"label":"2022-02-21T15:48:50.493Z","value":73},{"label":"2022-02-21T16:13:30.965Z","value":87},{"label":"2022-02-21T16:44:10.046Z","value":76},{"label":"2022-02-21T16:59:11.967Z","value":78},{"label":"2022-02-21T17:17:49.674Z","value":66},{"label":"2022-02-21T17:35:04.030Z","value":73},{"label":"2022-02-21T17:48:09.702Z","value":66},{"label":"2022-02-21T18:11:37.473Z","value":78},{"label":"2022-02-21T18:32:30.144Z","value":80},{"label":"2022-02-21T18:49:08.582Z","value":76},{"label":"2022-02-21T19:07:59.490Z","value":71},{"label":"2022-02-21T19:21:11.594Z","value":74},{"label":"2022-02-21T19:33:35.088Z","value":68},{"label":"2022-02-21T19:48:09.349Z","value":50},{"label":"2022-02-21T20:11:05.092Z","value":38},{"label":"2022-02-21T20:28:38.512Z","value":27},{"label":"2022-02-21T20:38:19.598Z","value":16},{"label":"2022-02-21T20:47:59.426Z","value":2},{"label":"2022-02-21T21:08:44.958Z","value":0},{"label":"2022-02-21T21:24:49.241Z","value":0},{"label":"2022-02-21T21:33:40.791Z","value":0},{"label":"2022-02-21T21:48:04.627Z","value":0},{"label":"2022-02-21T22:09:49.616Z","value":0},{"label":"2022-02-21T22:27:22.247Z","value":0},{"label":"2022-02-21T22:37:13.728Z","value":0},{"label":"2022-02-21T22:47:59.849Z","value":0},{"label":"2022-02-21T23:10:17.757Z","value":0},{"label":"2022-02-21T23:27:00.849Z","value":0},{"label":"2022-02-21T23:36:32.628Z","value":0},{"label":"2022-02-21T23:48:05.964Z","value":0},{"label":"2022-02-22T00:38:37.023Z","value":0},{"label":"2022-02-22T01:45:29.806Z","value":0},{"label":"2022-02-22T02:24:30.306Z","value":0},{"label":"2022-02-22T02:45:28.962Z","value":0},{"label":"2022-02-22T03:10:49.778Z","value":0},{"label":"2022-02-22T03:29:18.600Z","value":0},{"label":"2022-02-22T03:40:53.020Z","value":0},{"label":"2022-02-22T03:48:44.734Z","value":0},{"label":"2022-02-22T04:12:25.396Z","value":0},{"label":"2022-02-22T04:37:17.974Z","value":0},{"label":"2022-02-22T04:52:35.870Z","value":3},{"label":"2022-02-22T05:09:25.015Z","value":18},{"label":"2022-02-22T05:24:50.770Z","value":22},{"label":"2022-02-22T05:33:21.804Z","value":28},{"label":"2022-02-22T05:48:07.350Z","value":29},{"label":"2022-02-22T06:12:10.559Z","value":30},{"label":"2022-02-22T06:33:42.530Z","value":31},{"label":"2022-02-22T06:50:40.465Z","value":25},{"label":"2022-02-22T07:08:26.854Z","value":34},{"label":"2022-02-22T07:25:40.673Z","value":30},{"label":"2022-02-22T07:34:25.103Z","value":35},{"label":"2022-02-22T07:48:02.101Z","value":38},{"label":"2022-02-22T08:12:34.982Z","value":33},{"label":"2022-02-22T08:32:35.026Z","value":34},{"label":"2022-02-22T08:48:02.196Z","value":40},{"label":"2022-02-22T09:10:20.108Z","value":45},{"label":"2022-02-22T09:27:04.646Z","value":59},{"label":"2022-02-22T09:37:02.711Z","value":64},{"label":"2022-02-22T09:48:00.786Z","value":63},{"label":"2022-02-22T10:11:41.843Z","value":64},{"label":"2022-02-22T10:30:48.846Z","value":52},{"label":"2022-02-22T10:48:16.572Z","value":44},{"label":"2022-02-22T11:09:13.067Z","value":39},{"label":"2022-02-22T11:24:26.804Z","value":34},{"label":"2022-02-22T11:33:20.889Z","value":29},{"label":"2022-02-22T11:48:19.441Z","value":28},{"label":"2022-02-22T12:18:08.411Z","value":22},{"label":"2022-02-22T12:53:57.071Z","value":29},{"label":"2022-02-22T13:17:00.872Z","value":24},{"label":"2022-02-22T13:31:04.744Z","value":25},{"label":"2022-02-22T13:48:05.858Z","value":18},{"label":"2022-02-22T14:09:22.674Z","value":29},{"label":"2022-02-22T14:25:02.423Z","value":39},{"label":"2022-02-22T14:33:51.543Z","value":41},{"label":"2022-02-22T14:48:11.537Z","value":50},{"label":"2022-02-22T15:11:07.637Z","value":60},{"label":"2022-02-22T15:30:53.187Z","value":77},{"label":"2022-02-22T15:48:38.921Z","value":79},{"label":"2022-02-22T16:14:06.508Z","value":88},{"label":"2022-02-22T16:45:30.511Z","value":89},{"label":"2022-02-22T17:13:01.777Z","value":78},{"label":"2022-02-22T17:28:35.220Z","value":66},{"label":"2022-02-22T17:38:11.930Z","value":60},{"label":"2022-02-22T17:48:03.335Z","value":59},{"label":"2022-02-22T18:12:24.186Z","value":75},{"label":"2022-02-22T18:33:45.266Z","value":94},{"label":"2022-02-22T18:49:52.480Z","value":85},{"label":"2022-02-22T19:08:02.348Z","value":77},{"label":"2022-02-22T19:21:15.760Z","value":79},{"label":"2022-02-22T19:33:33.085Z","value":66},{"label":"2022-02-22T19:48:15.898Z","value":53},{"label":"2022-02-22T20:10:42.285Z","value":41},{"label":"2022-02-22T20:28:27.969Z","value":32},{"label":"2022-02-22T20:38:14.296Z","value":21},{"label":"2022-02-22T20:48:07.963Z","value":10},{"label":"2022-02-22T21:08:37.597Z","value":1},{"label":"2022-02-22T21:24:57.813Z","value":1},{"label":"2022-02-22T21:33:50.975Z","value":1},{"label":"2022-02-22T21:48:03.988Z","value":1},{"label":"2022-02-22T22:10:02.550Z","value":1},{"label":"2022-02-22T22:27:32.571Z","value":1},{"label":"2022-02-22T22:37:27.687Z","value":1},{"label":"2022-02-22T22:47:59.356Z","value":1},{"label":"2022-02-22T23:10:39.828Z","value":0},{"label":"2022-02-22T23:27:59.894Z","value":0},{"label":"2022-02-22T23:38:04.299Z","value":0},{"label":"2022-02-22T23:48:02.679Z","value":0},{"label":"2022-02-23T00:43:21.246Z","value":0},{"label":"2022-02-23T01:56:09.803Z","value":0},{"label":"2022-02-23T02:29:40.332Z","value":0},{"label":"2022-02-23T02:51:08.435Z","value":0},{"label":"2022-02-23T03:10:30.217Z","value":0},{"label":"2022-02-23T03:28:34.636Z","value":0},{"label":"2022-02-23T03:39:49.337Z","value":0},{"label":"2022-02-23T03:48:00.131Z","value":0},{"label":"2022-02-23T04:12:28.643Z","value":0},{"label":"2022-02-23T04:37:08.338Z","value":0},{"label":"2022-02-23T04:52:23.337Z","value":2},{"label":"2022-02-23T05:09:32.909Z","value":13},{"label":"2022-02-23T05:24:48.467Z","value":17},{"label":"2022-02-23T05:33:12.628Z","value":22},{"label":"2022-02-23T05:48:05.490Z","value":23},{"label":"2022-02-23T06:12:28.467Z","value":29},{"label":"2022-02-23T06:34:21.144Z","value":26},{"label":"2022-02-23T06:51:02.823Z","value":29},{"label":"2022-02-23T07:09:38.586Z","value":26},{"label":"2022-02-23T07:25:20.474Z","value":26},{"label":"2022-02-23T07:33:15.422Z","value":26},{"label":"2022-02-23T07:48:19.884Z","value":23},{"label":"2022-02-23T08:11:51.352Z","value":21},{"label":"2022-02-23T08:31:41.385Z","value":27},{"label":"2022-02-23T08:48:06.498Z","value":28},{"label":"2022-02-23T09:09:29.645Z","value":35},{"label":"2022-02-23T09:23:26.368Z","value":40},{"label":"2022-02-23T09:33:26.216Z","value":41},{"label":"2022-02-23T09:48:12.260Z","value":50},{"label":"2022-02-23T10:11:28.849Z","value":55},{"label":"2022-02-23T10:30:36.083Z","value":52},{"label":"2022-02-23T10:48:05.281Z","value":52},{"label":"2022-02-23T11:08:20.907Z","value":48},{"label":"2022-02-23T11:23:52.476Z","value":48},{"label":"2022-02-23T11:33:25.056Z","value":41},{"label":"2022-02-23T11:48:14.894Z","value":26},{"label":"2022-02-23T12:17:24.008Z","value":22},{"label":"2022-02-23T12:53:16.611Z","value":19},{"label":"2022-02-23T13:15:06.086Z","value":22},{"label":"2022-02-23T13:31:38.558Z","value":17},{"label":"2022-02-23T13:48:01.637Z","value":18},{"label":"2022-02-23T14:09:56.517Z","value":35},{"label":"2022-02-23T14:24:59.489Z","value":39},{"label":"2022-02-23T14:33:57.506Z","value":44},{"label":"2022-02-23T14:48:09.907Z","value":52},{"label":"2022-02-23T15:10:52.218Z","value":76},{"label":"2022-02-23T15:30:43.488Z","value":78},{"label":"2022-02-23T15:48:47.916Z","value":89},{"label":"2022-02-23T16:13:37.144Z","value":106},{"label":"2022-02-23T16:47:12.089Z","value":95},{"label":"2022-02-23T17:12:41.952Z","value":99},{"label":"2022-02-23T17:30:32.256Z","value":93},{"label":"2022-02-23T17:48:09.920Z","value":83},{"label":"2022-02-23T18:10:23.651Z","value":88},{"label":"2022-02-23T18:31:33.770Z","value":110},{"label":"2022-02-23T18:49:28.357Z","value":109},{"label":"2022-02-23T19:08:13.834Z","value":92},{"label":"2022-02-23T19:21:42.140Z","value":90},{"label":"2022-02-23T19:33:45.037Z","value":89},{"label":"2022-02-23T19:48:01.809Z","value":73},{"label":"2022-02-23T20:10:35.783Z","value":55},{"label":"2022-02-23T20:28:33.257Z","value":43},{"label":"2022-02-23T20:38:29.455Z","value":28},{"label":"2022-02-23T20:48:05.090Z","value":21},{"label":"2022-02-23T21:09:18.180Z","value":2},{"label":"2022-02-23T21:26:17.121Z","value":2},{"label":"2022-02-23T21:35:56.606Z","value":2},{"label":"2022-02-23T21:48:07.884Z","value":2},{"label":"2022-02-23T22:09:44.304Z","value":2},{"label":"2022-02-23T22:28:16.168Z","value":2},{"label":"2022-02-23T22:38:44.934Z","value":2},{"label":"2022-02-23T22:48:04.050Z","value":2},{"label":"2022-02-23T23:10:32.745Z","value":0},{"label":"2022-02-23T23:28:08.527Z","value":0},{"label":"2022-02-23T23:38:48.697Z","value":0},{"label":"2022-02-23T23:47:58.656Z","value":0},{"label":"2022-02-24T00:41:22.082Z","value":0},{"label":"2022-02-24T01:54:51.427Z","value":0},{"label":"2022-02-24T02:31:15.328Z","value":0},{"label":"2022-02-24T02:56:11.633Z","value":0},{"label":"2022-02-24T03:11:19.217Z","value":0},{"label":"2022-02-24T03:28:05.851Z","value":0},{"label":"2022-02-24T03:38:54.215Z","value":0},{"label":"2022-02-24T03:48:00.672Z","value":0},{"label":"2022-02-24T04:12:31.522Z","value":0},{"label":"2022-02-24T04:37:38.344Z","value":0},{"label":"2022-02-24T04:52:48.705Z","value":0},{"label":"2022-02-24T05:09:27.942Z","value":9},{"label":"2022-02-24T05:25:15.307Z","value":19},{"label":"2022-02-24T05:33:30.412Z","value":25},{"label":"2022-02-24T05:48:11.762Z","value":33},{"label":"2022-02-24T06:12:20.049Z","value":33},{"label":"2022-02-24T06:34:18.682Z","value":39},{"label":"2022-02-24T06:51:12.102Z","value":24},{"label":"2022-02-24T07:09:43.901Z","value":17},{"label":"2022-02-24T07:25:34.998Z","value":22},{"label":"2022-02-24T07:33:39.239Z","value":22},{"label":"2022-02-24T07:48:03.799Z","value":22},{"label":"2022-02-24T08:12:11.525Z","value":27},{"label":"2022-02-24T08:32:14.862Z","value":29},{"label":"2022-02-24T08:48:04.378Z","value":41},{"label":"2022-02-24T09:10:31.827Z","value":36},{"label":"2022-02-24T09:27:31.183Z","value":37},{"label":"2022-02-24T09:37:45.285Z","value":41},{"label":"2022-02-24T09:48:04.801Z","value":40},{"label":"2022-02-24T10:10:51.902Z","value":38},{"label":"2022-02-24T10:30:42.327Z","value":35},{"label":"2022-02-24T10:48:03.511Z","value":42},{"label":"2022-02-24T11:08:31.392Z","value":36},{"label":"2022-02-24T11:24:06.519Z","value":29},{"label":"2022-02-24T11:33:31.204Z","value":22},{"label":"2022-02-24T11:48:14.057Z","value":42},{"label":"2022-02-24T12:17:03.880Z","value":36},{"label":"2022-02-24T12:53:52.612Z","value":21},{"label":"2022-02-24T13:15:25.192Z","value":25},{"label":"2022-02-24T13:35:55.946Z","value":29},{"label":"2022-02-24T13:48:02.609Z","value":32},{"label":"2022-02-24T14:10:01.487Z","value":40},{"label":"2022-02-24T14:25:47.600Z","value":42},{"label":"2022-02-24T14:34:57.819Z","value":43},{"label":"2022-02-24T14:48:16.923Z","value":40},{"label":"2022-02-24T15:10:49.794Z","value":64},{"label":"2022-02-24T15:30:41.470Z","value":67},{"label":"2022-02-24T15:48:51.244Z","value":62},{"label":"2022-02-24T16:13:40.447Z","value":80},{"label":"2022-02-24T16:48:49.808Z","value":82},{"label":"2022-02-24T16:59:53.163Z","value":83},{"label":"2022-02-24T17:20:05.201Z","value":83},{"label":"2022-02-24T17:35:45.273Z","value":79},{"label":"2022-02-24T17:48:14.414Z","value":74},{"label":"2022-02-24T18:12:23.687Z","value":59},{"label":"2022-02-24T18:33:55.296Z","value":61},{"label":"2022-02-24T18:50:07.276Z","value":55},{"label":"2022-02-24T19:08:37.992Z","value":62},{"label":"2022-02-24T19:21:53.901Z","value":62},{"label":"2022-02-24T19:33:35.658Z","value":58},{"label":"2022-02-24T19:50:22.081Z","value":44},{"label":"2022-02-24T20:10:31.862Z","value":30},{"label":"2022-02-24T20:28:30.354Z","value":13},{"label":"2022-02-24T20:38:31.571Z","value":7},{"label":"2022-02-24T20:48:11.332Z","value":1},{"label":"2022-02-24T21:09:09.296Z","value":0},{"label":"2022-02-24T21:25:44.620Z","value":0},{"label":"2022-02-24T21:35:07.400Z","value":0},{"label":"2022-02-24T21:48:06.875Z","value":0},{"label":"2022-02-24T22:10:30.034Z","value":0},{"label":"2022-02-24T22:28:19.342Z","value":0},{"label":"2022-02-24T22:38:43.967Z","value":0},{"label":"2022-02-24T22:48:08.222Z","value":0},{"label":"2022-02-24T23:10:39.507Z","value":0},{"label":"2022-02-24T23:28:14.597Z","value":0},{"label":"2022-02-24T23:38:35.394Z","value":0},{"label":"2022-02-24T23:48:05.515Z","value":0},{"label":"2022-02-25T00:41:43.805Z","value":0},{"label":"2022-02-25T01:52:35.691Z","value":0},{"label":"2022-02-25T02:29:02.368Z","value":0},{"label":"2022-02-25T02:51:26.369Z","value":0},{"label":"2022-02-25T03:10:42.586Z","value":0},{"label":"2022-02-25T03:29:06.433Z","value":0},{"label":"2022-02-25T03:40:40.302Z","value":0},{"label":"2022-02-25T03:48:28.052Z","value":0},{"label":"2022-02-25T04:12:30.983Z","value":0},{"label":"2022-02-25T04:37:17.026Z","value":0},{"label":"2022-02-25T04:52:32.990Z","value":0},{"label":"2022-02-25T05:09:32.553Z","value":6},{"label":"2022-02-25T05:24:54.000Z","value":8},{"label":"2022-02-25T05:33:27.183Z","value":9},{"label":"2022-02-25T05:48:24.841Z","value":10},{"label":"2022-02-25T06:12:31.075Z","value":14},{"label":"2022-02-25T06:35:18.071Z","value":12},{"label":"2022-02-25T06:51:29.106Z","value":11},{"label":"2022-02-25T07:09:48.461Z","value":14},{"label":"2022-02-25T07:25:30.005Z","value":16},{"label":"2022-02-25T07:33:30.507Z","value":17},{"label":"2022-02-25T07:48:09.102Z","value":18},{"label":"2022-02-25T08:12:11.490Z","value":25},{"label":"2022-02-25T08:32:10.511Z","value":30},{"label":"2022-02-25T08:48:04.900Z","value":30},{"label":"2022-02-25T09:10:22.639Z","value":42},{"label":"2022-02-25T09:27:25.271Z","value":33},{"label":"2022-02-25T09:37:45.964Z","value":38},{"label":"2022-02-25T09:48:01.380Z","value":39},{"label":"2022-02-25T10:10:57.699Z","value":50},{"label":"2022-02-25T10:30:59.640Z","value":53},{"label":"2022-02-25T10:48:03.188Z","value":47},{"label":"2022-02-25T11:08:19.917Z","value":44},{"label":"2022-02-25T11:24:00.250Z","value":35},{"label":"2022-02-25T11:33:25.039Z","value":30},{"label":"2022-02-25T11:48:18.470Z","value":31},{"label":"2022-02-25T12:16:19.437Z","value":30},{"label":"2022-02-25T12:52:21.683Z","value":28},{"label":"2022-02-25T13:14:17.589Z","value":40},{"label":"2022-02-25T13:30:40.089Z","value":34},{"label":"2022-02-25T13:48:01.431Z","value":40},{"label":"2022-02-25T14:09:15.955Z","value":50}]

