import DS from 'ember-data';
import {computed} from '@ember/object';
import {union, filterBy, mapBy, sum} from '@ember/object/computed'

const { Model } = DS;

export default Model.extend({
    name: DS.attr('string'),
    homeGames: DS.hasMany('game', {inverse : 'homeTeam'}),
    awayGames: DS.hasMany('game', {inverse : 'awayTeam'}),

    games: union('homeGames','awayGames'),

    gamesDrawn: filterBy('games', 'isDraw'),

    homeGamesWon: filterBy('homeGames', 'isHomeWin'),
    awayGamesWon: filterBy('awayGames', 'isAwayWin'),
    gamesWon: union('homeGamesWon', 'awayGamesWon'),
    
    homeGamesLost: filterBy('homeGames', 'isAwayWin'),
    awayGamesLost: filterBy('awayGames', 'isHomeWin'),
    gamesLost: union('homeGamesLost', 'awayGamesLost'),

    homeGoalsScoredArray: mapBy('homeGames', 'homeGoals'),
    homeGoalsScored: sum('homeGoalsScoredArray'),
    awayGoalsScoredArray: mapBy('awayGames', 'awayGoals'),
    awayGoalsScored: sum('awayGoalsScoredArray'),
    goalsScored: computed('homeGoalsScored', 'awayGoalsScored', function(){
        return this.homeGoalsScored + this.awayGoalsScored
    }),

    homeGoalsAgainstArray: mapBy('homeGames', 'awayGoals'),
    homeGoalsAgainst: sum('homeGoalsAgainstArray'),
    awayGoalsAgainstArray: mapBy('awayGames', 'homeGoals'),
    awayGoalsAgainst: sum('awayGoalsAgainstArray'),
    goalsAgainst: computed('homeGoalsAgainst', 'awayGoalsAgainst', function(){
        return this.homeGoalsAgainst + this.awayGoalsAgainst;
    }),

    goalDifference: computed('goalsScored','goalsAgainst', function(){
        return this.goalsScored - this.goalsAgainst;
    }),

    pointCount: computed('gamesWon.length', 'gamesDrawn.length', function(){
        return this.gamesWon.length*3 + this.gamesDrawn.length;
    }),

});
