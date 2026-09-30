<template>
    <!-- TODO: een volgende keer mag je wel een apart Nav component maken voor de navigatie voor betere structuur -->
    <nav>
        <router-link :to="{name: 'books.overview'}">Boeken Overzicht</router-link> |
        <router-link :to="{name: 'books.create'}">Boek Toevoegen</router-link> |
        <router-link :to="{name: 'authors.overview'}">Auteurs</router-link> | 
        <router-link :to="{name: 'authors.create'}">Auteur Toevoegen</router-link>
        <hr>
    </nav>
    <router-view></router-view>
</template>