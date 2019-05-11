import Service from '@ember/service';
import {inject} from '@ember/service';
import {later} from '@ember/runloop';
import {shuffle} from 'ember-composable-helpers/helpers/shuffle';
import {computed} from '@ember/object';

let DELAY_BETWEEN_GAMES = 500;

let WEEK = 0;

export default Service.extend({
    store: inject(),

    games: computed(function(){
        return this.store.peekAll('game');
    }),

    teams: computed(function() {
        return this.store.peekAll('team');
    }),


    init() {
        this._super(...arguments);

        console.log('simulcast..');

        this.seedTeams();

        later(this, this.simulateGame, DELAY_BETWEEN_GAMES)
    },

    seedTeams(){

        let teamNames = ['AFC Bournemouth','Arsenal','Brighton & Hove Albion','Burnley','Cardiff City','Chelsea','Crystal Palace','Everton','Fulham','Huddersfield Town','Leicester City','Liverpool','Manchester City','Manchester United','Newcastle United','Southampton','Tottenham Hotspur','Watford','West Ham United','Wolverhampton Wanderers']
    
        for( let i=0; i<teamNames.length; i++){
            this.store.createRecord('team', {id: i, name: teamNames[i] })
        }
    
    },

    simulateGame(){
        WEEK++;
        let teams = this.store.peekAll('team');

        let shuffledTeams = shuffle(teams);

        for(let i=0; i<10; i++){
            let homeTeam = shuffledTeams[2*i];
            let awayTeam = shuffledTeams[2*i+1];

            let homeGoals = this.randomScore(4);
            let awayGoals = this.randomScore(3);

            this.store.createRecord('game', {
                homeTeam,
                awayTeam,
                homeGoals,
                awayGoals,
                playedOn: WEEK
            });
        }
        if(WEEK < 38 )
        later(this, this.simulateGame, DELAY_BETWEEN_GAMES)
    },

    randomScore(maxGoals){
        return Math.round(Math.random() * maxGoals);
    },

});
