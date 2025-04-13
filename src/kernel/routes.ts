abstract class Route {
    constructor(protected readonly prefix: string = '') { }

    protected path(subpath: string = ''): string {
        return `${this.prefix}/${subpath}`.replace(/\/+/g, '/');
    }

    protected dynamic(subpath: string): string {
        return this.path(`[${subpath}]`);
    }
}

class ProfileRoutes extends Route {
    main = this.path('');
    wallet = this.path('wallet');
    transactions = this.path('transactions');
    badges = this.path('badges');
    impact = this.path('impact'); // AR-визуализация
    createProject = this.path('create-project');
}

class ProjectsRoutes extends Route {
    main = this.path('');
    projectId = (id: string | number) => this.path(`${id}`);
}

class AppRoutes extends Route {
    signIn = this.path('sign-in');
    signUp = this.path('sign-up');
    forgotPassword = this.path('forgot-password');
    resetPassword = this.path('reset-password');

    home = this.path('');
    howItWorks = this.path('how-it-works');
    about = this.path('about');
    esgRatings = this.path('esg-ratings');
    leaderboard = this.path('leaderboard');
    events = this.path('events');
    partners = this.path('partners');
    privacy = this.path('privacy');
    terms = this.path('terms');

    volunteer = this.path('volunteer');
    
    // Подкатегории
    profile = new ProfileRoutes(this.path('profile'));
    projects = new ProjectsRoutes(this.path('projects'));
}

export const appRoutes = new AppRoutes();