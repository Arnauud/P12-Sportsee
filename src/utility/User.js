
/////////////////////////////////////POIDS.jsx/////////////////////////////////////

  export class UserActivity {
    constructor({ sessions }) {
      this.sessions = sessions.map((session) => this.formatSession(session));
    }
  
    formatSession(session) {
      return {
        day: this.formatDay(session.day), // Keep formatted day as string
        kilogram: session.kilogram, // Keep numeric for Recharts
        calories: session.calories, // Keep numeric for Recharts
      };
    }
  
    formatDay(day) {
      const dayNumber = parseInt(day.split('-')[2], 10); // Extract the day number
      return `${dayNumber}`;
    }
  
    getFormattedTooltip(tooltipType, value) {
      if (tooltipType === 'Poids (kg)') return `${value} kg`;
      if (tooltipType === 'Calories brûlées (kCal)') return `${value} kcal`;
      return value;
    }
  }
  
  
  /////////////////////////////////////OBJECTIFS.jsx/////////////////////////////////////
  
  export class UserAverageSessions {
    constructor({ sessions }) {
      this.sessions = sessions.map((session) => ({
        day: this.formatDay(session.day),
        sessionLength: session.sessionLength,
      }));
    }
  
    formatDay(day) {
      const daysOfWeek = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
      return daysOfWeek[day - 1];
    }
  }
  

/////////////////////////////////////radar.jsx/////////////////////////////////////

  export class UserPerformance {
    constructor({ kind, data }) {
      this.kind = kind;
      this.data = data.map((entry) => this.formatPerformance(entry, kind));
    }
  
    formatPerformance(entry, kind) {
      return {
        kind: kind[entry.kind],
        value: entry.value,
      };
    }
  }