const TOKEN_KEY = "canLogin";

export const AuthProvider = {
    login: async ({ email, password }) => {
        if ((email === "admin@mail.com") && password === "admin@123") {
            localStorage.setItem(TOKEN_KEY, email);
            localStorage.setItem("auth", JSON.stringify({ email }));
            return {
                success: true,
                redirectTo: "/dashboard",
            };
        }
        return {
            success: false,
            error: {
                name: "LoginError",
                message: "Invalid email or password",
            },
        };
    },
    logout: async () => {
        localStorage.removeItem(TOKEN_KEY);
        localStorage.removeItem("auth");
        return {
            success: true,
            redirectTo: "/",
        };
    },
    check: async () => {
        const token = localStorage.getItem(TOKEN_KEY);
        if (token) {
            return {
                authenticated: true,
            };
        }

        return {
            authenticated: false,
            redirectTo: "/login",
        };
    },
    getPermissions: async () => null,
    getIdentity: async () => {
        const token = localStorage.getItem(TOKEN_KEY);
        if (token) {
            return {
                id: 1,
                name: "John Doe",
                avatar: "https://i.pravatar.cc/300",
            };
        }
        return null;
    },
    onError: async (error) => {
        console.error(error);
        return { error };
    },
};
