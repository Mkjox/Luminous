import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList } from "@/components/ui/breadcrumb";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Trophy, Brain, Users, Zap } from "lucide-react";

const Home = () => {
    return (
        <div>
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/" className="breadcrumb">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <div className="space-y-8">
                <section className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                        Welcome to Luminous
                    </h1>
                    <p className="mt-4 text-xl font-semibold text-muted-foreground">
                        Challenge yourself, unite your mind and body!
                    </p>
                </section>

                <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    <Card className="card flex flex-col items-center justify-center text-center">
                        <Trophy className="h-8 w-8 text-primary mb-2" />
                        <CardTitle className="m-2">Compete</CardTitle>
                        <CardDescription className="m-2">
                            Challenge friends and climb the leaderboard
                        </CardDescription>
                    </Card>

                    <Card className="card flex flex-col items-center justify-center text-center">
                        <Brain className="h-8 w-8 text-primary mb-2" />
                        <CardTitle className="m-2">Learn</CardTitle>
                        <CardDescription className="m-2">
                            Expand your knowledge across various topics
                        </CardDescription>
                    </Card>

                    <Card className="card flex flex-col items-center justify-center text-center">
                        <Users className="h-8 w-8 text-primary mb-2" />
                        <CardTitle className="m-2">Connect</CardTitle>
                        <CardDescription className="m-2">
                            Join a community of enthusiasts
                        </CardDescription>
                    </Card>

                    <Card className="card flex flex-col items-center justify-center text-center">
                        <Zap className="h-8 w-8 text-primary mb-2" />
                        <CardTitle className="m-2">Improve</CardTitle>
                        <CardDescription className="m-2">
                            Track your progress and boost your skills
                        </CardDescription>
                    </Card>
                </section>
            </div>
        </div>
    )
}

export default Home;