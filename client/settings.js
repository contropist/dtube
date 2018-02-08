Meteor.settings.public = {
  "remote": {
    "dfees": 2500,
    "loadLimit": 12,
    "uploadNodes": [
      { 'owner': 'nannal','node': {'host': 'gateway.ipfsstore.it','port': 443,'protocol': 'https'} },
      { 'owner': 'dtube','node': {'host': 'dtube1.gateway.ipfsstore.it','port': 443,'protocol': 'https'} },
      { 'owner': 'dtube','node': {'host': 'dtube2.gateway.ipfsstore.it','port': 443,'protocol': 'https'} },
      { 'owner': null,'node': {'host': '127.0.0.1','port': 5001,'protocol': 'http'} }
    ],
    "displayNodes": [
      "https://snap1.d.tube",
      "http://127.0.0.1:8080"
    ],
    "snapMaxFileSizeKB": 1024,
    "upldr": [1,2,3,4,5,'g1']
  },
  "app": 'dtube/0.6',
  "beneficiary": "dtube",
  "pageTitleSeparator": '-',
  "appName": 'DTube',
  "ipns": "Qmb8hgdQoyotsnUj3JKWvWzcfA9Jx4Ak2ao1XzCVLfDtuB",
  "translations": {
    "en-us": {author: 'curator', permlink: 're-curator-dtube-translations-root-20170905t000249923z'},
    "es-es": {author: 'curator', permlink: 're-curator-dtube-translations-root-20170922t201038814z'},
    "es-mx": {author: 'curator', permlink: 're-curator-dtube-translations-root-20170922t201104670z'},
    "es-ve": {author: 'curator', permlink: 're-curator-dtube-translations-root-20170922t201216550z'},
    "fr-fr": {author: 'curator', permlink: 're-curator-dtube-translations-root-20170905t002032311z'},
    "ko-kr": {author: 'curator', permlink: 're-curator-dtube-translations-root-20170919t133419412z'},
    "pt-pt": {author: 'curator', permlink: 're-curator-dtube-translations-root-20170919t134820783z'},
    "zh-cn": {author: 'curator', permlink: 're-curator-dtube-translations-root-20170922t195803253z'},
    "ar": {author: 'curator', permlink: 're-curator-dtube-translations-root-20170922t195653064z'},
    "da": {author: 'curator', permlink: 're-curator-dtube-translations-root-20170922t195952809z'},
    "de": {author: 'curator', permlink: 're-curator-dtube-translations-root-20170922t200309127z'},
    "et": {author: 'curator', permlink: 're-curator-dtube-translations-root-20170922t200641990z'},
    "hr": {author: 'curator', permlink: 're-curator-dtube-translations-root-20170922t200823074z'},
    "id": {author: 'curator', permlink: 're-curator-dtube-translations-root-20170922t200854549z'},
    "it": {author: 'curator', permlink: 're-curator-dtube-translations-root-20170922t201636123z'},
    "lt": {author: 'curator', permlink: 're-curator-dtube-translations-root-20170919t135235158z'},
    "nl": {author: 'curator', permlink: 're-curator-dtube-translations-root-20170922t200933109z'},
    "pl": {author: 'curator', permlink: 're-curator-dtube-translations-root-20170919t140006611z'},
    "tr": {author: 'curator', permlink: 're-curator-dtube-translations-root-20170919t135734303z'}
  },
  "errors": {author: 'curator', permlink: 'dtube-error-reports'}
}
