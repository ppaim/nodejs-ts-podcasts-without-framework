# Podecast

### Descrição
Um App no estilo NetFlix onde eu possa organizar diferentes epsódios de podcasts
separador po categorias

### Domínio
PodCast em Videos

### Features
- Listar epsódios podcast em sessões de categorias
- [ saúde, bodybuilder, mentalidade, Humor ]
- Filtrar episódios por nome de podcasts

### Como
#### Feature
   GET: retorna lista de episódios - Listar epsódios podcast em sessões de categorias
#### Como Implementar
    - Vou retornar em uma API Rest (json):
      nome do podcast, epsódio, imagem de capa, link

      https://i.ytimg.com/vi/-wv6MlxyKGE/maxresdefault.jpg

```js 
    [
        {
            "podcastname": "flow",
            "episodio": "COMO FIZ PRA PERDER 30KG",
            "videoid": "-wv6MlxyKGE",
            "cover": "https://i.ytimg.com/vi/-wv6MlxyKGE/maxresdefault.jpg",
            "link": "https://www.youtube.com/watch?v=-wv6MlxyKGE",
            "categories": ["saúde","bodybuilder"]
        },
                {
            "podcastname": "engflowlish",
            "episodio": "CSEREMOS EXTINTOS PELA INTELIGÊNCIA ARTIFICIAL?",
            "videoid": "g-1ZLqvRvrg",
            "cover": "https://i.ytimg.com/vi/g-1ZLqvRvrg/maxresdefault.jpg",
            "link": "https://www.youtube.com/watch?v=g-1ZLqvRvrg",
            "categories": ["tech"]
        },
    ]

```


