Search = {
    api: 'https://search.d.tube',
    //api: 'http://localhost:9200',
    text: (query, sort, cb) => {
        var url = Search.api+'/avalon.contents/_search?q='+query
        if (sort)
            url += '&sort='+sort
        fetch(url, {
            method: 'GET',
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            }
        }).then(res => res.json()).then(function(res) {
            res.results = []
            for (let i = 0; i < res.hits.hits.length; i++) {
                res.hits.hits[i]._source._id = res.hits.hits[i]._id
                res.results.push(Videos.parseFromChain(res.hits.hits[i]._source))
            }
            cb(null, res)
        });
    },
    moreLikeThis: (id, cb) => {
        var esQuery = {
            query: {
                more_like_this: {
                    fields: ["author", "json.title", "json.description", "votes.tag"],
                    like: [{
                        _index: "avalon.contents",
                        _id: id
                    }],
                    "min_term_freq" : 1,
                    "min_doc_freq": 1
                }
            }
        }
        fetch(Search.api+'/avalon.contents/_search', {
            method: 'POST',
            body: JSON.stringify(esQuery),
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
        }).then(res => res.json()).then(function(res) {
            console.log(res)
            res.results = []
            for (let i = 0; i < res.hits.hits.length; i++) {
                res.hits.hits[i]._source._id = res.hits.hits[i]._id
                res.results.push(Videos.parseFromChain(res.hits.hits[i]._source))
            }
            cb(null, res)
        });
    }
}