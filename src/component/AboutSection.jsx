import { Code, Server, Database } from "lucide-react";

export const AboutSection = () => {
    return(
        <section id="about" className="py-24 px-4 relative">
            {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            Inspiring Full-Stack Developer
                        </h3>

                        <p className="text-muted-foreground">
                            Currently have about 1 year of experience in web development, I'm
                            learning to create a responsive, accessible, and easy to navigate 
                            web application using modern frameworks.
                        </p>

                        <p className="text-muted-foreground">
                            I'm passionate about creating simple and responsive website. and learning
                            to create solutions for complex problems, and I'm constantly learning new technologies and 
                            techniques to keep-up with the current trend of the ever-evolving website contents.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Get In Touch
                            </a>

                            <a 
                                href="https://www.canva.com/design/DAFr-vVU_kE/7xIsq7cY11SF8A0RBnAFOg/edit?utm_content=DAFr-vVU_kE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                                    Download CV
                                </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6"> {/*container for all 3 cards*/}
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary"></Code>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Web Development</h4>
                                    <p className="text-muted-foreground">
                                        Creating responsive websites and web applications with modern frameworks.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Database className="h-6 w-6 text-primary"></Database>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Database Management</h4>
                                    <p className="text-muted-foreground">
                                        Learning to manage database using SQL or MongoDB.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Server className="h-6 w-6 text-primary"></Server>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Server</h4>
                                    <p className="text-muted-foreground">
                                        Learning to use servers to deploy the current website.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}