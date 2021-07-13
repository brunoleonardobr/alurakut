import MainGrid from '../src/components/MainGrid'
import React from 'react';
import Box from '../src/components/Box'
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations'

function ProfileSideBar(propriedades){
  return(
    <Box as="aside">
      <img src={`https://github.com/${propriedades.githubUser}.png`} style={{borderRadius:'8px'}}/>
      <hr/>

      <a className="boxLink" href={`https://github.com/${propriedades.githubUser}`}>
        @{propriedades.githubUser}
      </a>
      <hr/>
      <AlurakutProfileSidebarMenuDefault/>
    </Box>
  )
}

export default function Home() {
  const [comunidades, setComunidades] = React.useState([{
    id: new Date().toISOString(),
    title: 'Eu odeio acordar cedo',
    image: 'http://alurakut.vercel.app/capa-comunidade-01.jpg'
  }]);
  const githubUser = "brunoleonardobr";
  const pessoasFavoritas = ["juunegreiros", "omariosouto", "marcobrunodev", "peas", "rafaballerini", "felipefialho"]

  return (
    <>
    <AlurakutMenu/>
    <MainGrid>
      <div className="profileArea" style={{gridArea: 'profileArea'}}>
        <ProfileSideBar githubUser={githubUser}/>
      </div>
      <div className="welcomeArea" style={{gridArea: 'welcomeArea'}}>
        <Box>
          <h1 className="title">Bem vindo(a)</h1>
          <OrkutNostalgicIconSet/>
        </Box>
        <Box>
          <h2 className="subTitle">O que você deseja fazer?</h2>
          <form onSubmit={(e)=>{
            e.preventDefault();
            const dadosDoForm = new FormData(e.target);
            const comunidade = {
              id: new Date().toISOString,
              title: dadosDoForm.get('title'),
              image: dadosDoForm.get('image')
            }
            setComunidades([...comunidades,comunidade]);
          }}>
            <div>
            <input 
              type="text"
              placeholder="Qual vai ser o nome da sua comunidade?" 
              name="title" 
              aria-label=""/>
            </div>
            <div>
              <input 
                type="text"
                placeholder="Coloque uma url para usarmos de capa" 
                name="image" 
                aria-label=""/>
            </div>

            <button>
              Criar comunidade
            </button>
          </form>
        </Box>
      </div>
      <div className="profileRelationsArea"  style={{gridArea: 'profileRelationsArea'}}>
        <ProfileRelationsBoxWrapper>
        <h2 className="smallTitle">
            Comunidades ({comunidades.length})
          </h2>
        <ul>
          {comunidades.map(item=>{
            return (
              <li key={item.id}>
                <a href={`/users/${item.title}`} key={item.title}>
                  <img src={item.image}/>
                  <span>{item.title}</span>
                </a>
              </li>
            )
          })}
          </ul>
        </ProfileRelationsBoxWrapper>
        <ProfileRelationsBoxWrapper>
          <h2 className="smallTitle">
            Pessoas da comunidade
          </h2>
          <ul>
          {pessoasFavoritas.map(user=>{
            return (
              <li key={user}>
                <a href={`/users/${user}`}>
                  <img src={`https://github.com/${user}.png`}/>
                  <span>{user}</span>
                </a>
              </li>
            )
          })}
          </ul>
        </ProfileRelationsBoxWrapper>
      </div>
    </MainGrid>
    </>
  )
}
