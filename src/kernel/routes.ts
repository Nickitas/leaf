abstract class Route {
    constructor(protected readonly prefix: string = '') { }

    protected path(subpath: string = ''): string {
        return `${this.prefix}/${subpath}`.replace(/\/+/g, '/');
    }

    protected dynamic(subpath: string): string {
        return this.path(`[${subpath}]`);
    }
}

class AppRoutes extends Route {
    home = this.path('');
    howItWorks = this.path('how-it-works');
    about = this.path('about');
    esgRatings = this.path('esg-ratings');
    leaderboard = this.path('leaderboard');
    events = this.path('events');
    partners = this.path('partners');
    privacy = this.path('privacy');

    // Подкатегории
    auth = new AuthRoutes(this.path('auth'));
    profile = new ProfileRoutes(this.path('profile'));
    projects = new ProjectsRoutes(this.path('projects'));
    business = new BusinessRoutes(this.path('for-business'));
   
    investProject = (projectId: number) => this.path(`${projectId}`);
}

export const appRoutes = new AppRoutes();


class AuthRoutes extends Route {
    signIn = this.path('sign-in');
    signUp = this.path('sign-up');
    forgotPassword = this.path('forgot-password');
    resetPassword = this.path('reset-password');
}

class ProfileRoutes extends Route {
    main = this.path('');
    wallet = this.path('wallet');
    transactions = this.path('transactions');
    badges = this.path('badges');
    impact = this.path('impact'); // AR-визуализация
    settings = this.path('settings');
}

class ProjectsRoutes extends Route {
    main = this.path('');
    projectId = (id: string | number) => this.path(`${id}`);
}

class BusinessRoutes extends Route {
    main = this.path('');
    verification = this.path('verification');
    createProject = this.path('create');
}