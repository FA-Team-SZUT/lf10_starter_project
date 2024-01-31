import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { EmployeeListComponent } from "./employee-list/employee-list.component";
import { QualificationsComponent } from "./qualifications/qualifications.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    CommonModule,
    EmployeeListComponent,
    QualificationsComponent,
    LandingPageComponent,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "lf10StarterNew";
}
