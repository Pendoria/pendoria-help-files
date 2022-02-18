import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: "about",
    },
    {
        path: "about",
        loadChildren: () => import("./files/pages/pendoria/pendoria.module").then(m => m.PendoriaModule)
    },
    {
        path: "players",
        children: [
            {
                path: "puls3",
                loadChildren: () => import("./files/players/pages/puls3/puls3.module").then(m => m.Puls3Module)
            },
            {
                path: "maria",
                loadChildren: () => import("./files/players/pages/maria/maria.module").then(m => m.MariaModule)
            },
            {
                path: "xortrox",
                loadChildren: () => import("./files/players/pages/xortrox/xortrox.module").then(m => m.XortroxModule)
            },
            {
                path: "zampa",
                loadChildren: () => import("./files/players/pages/zampa/zampa.module").then(m => m.ZampaModule)
            },
            {
                path: "obscurity",
                loadChildren: () => import("./files/players/pages/obscurity/obscurity.module").then(m => m.ObscurityModule)
            },
        ]
    },
    {
        path: "userscripts",
        children: [
            {
                path: "pendorian-elite-ui",
                loadChildren: () => import("./files/userscripts/pages/elite-ui/elite-ui.module").then(m => m.EliteUiModule)
            },
        ]
    },
    {
        path: "**",
        loadChildren: () => import("./files/pages/not-found/not-found.module").then(m => m.NotFoundModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
