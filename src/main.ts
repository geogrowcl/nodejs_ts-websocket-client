


function main(): void{
  const os: NodeJS.ProcessEnv = process.env;
  const url: string | undefined = os['URL'];
  const port: number = parseInt(`${os['PORT'] || 3000 }`)
  const userId: string | undefined = os['USER_ID'];
  

  console.log("Hola Mundo");

  
}

main();