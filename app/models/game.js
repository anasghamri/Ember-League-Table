import DS from 'ember-data';
import {computed} from '@ember/object';
const { Model } = DS;

export default Model.extend({
    homeTeam: DS.belongsTo('team', {inverse: 'homeGames'}),
    awayTeam: DS.belongsTo('team', {inverse: 'awayGames'}),
    homeGoals: DS.attr('number'),
    awayGoals: DS.attr('number'),
    playedOn: DS.attr('number'),

    isHomeWin: computed('homeGoals', 'awayGoals', function(){
        return this.homeGoals > this.awayGoals
    }),

    isAwayWin: computed('homeGoals', 'awayGoals', function(){
        return this.homeGoals < this.awayGoals
    }),

    isDraw: computed('homeGoals', 'awayGoals', function(){
        return this.homeGoals === this.awayGoals
    }),

    winningTeam: computed('isHomeWin', 'isAwayWin', 'homeTeam', 'awayTeam', function(){
        if(this.isHomeWin){
            return this.homeTeam;
        }
        else if(this.isAwayWin){
            return this.awayTeam;
        }
    })
});
