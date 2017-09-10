let ECMAScripts = [
    {'name': 'EC1', 'year': 1997 },
    {'name': 'ES2', 'year': 1998 },
    {'name': 'ES3', 'year': 1999},
    {'name': 'ES4', 'year': 'N/A'},
    {'name': 'ES5', 'year': 2009},
    {'name': 'ES5.1', 'year': 2001 },
    {'name': 'ES6', 'year': 2015},
    {'name': 'ES7', 'year': 2016},
];

ECMAScripts.forEach(
    es => console.log(es.name, es.year)
);