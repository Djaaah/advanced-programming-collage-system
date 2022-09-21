import Navbar from './components/Sidebar/Navbar';
import './assets/js/main.js';
import './assets/css/index.css';
import {BrowserRouter, Routes , Route} from 'react-router-dom';

import Dashboard from './pages/0Dashboard/Dashboard';

import Alunos from './pages/1Alunos/Alunos';
import AddNewAluno from './pages/1Alunos/AddNewAluno';

import AlunosProspectados from './pages/2Alunos_Prospectados/AlunosProspectados';
import AddNewAlunoProspectado from './pages/2Alunos_Prospectados/AddNewAlunoProspectado';

import Professores from './pages/3Professores/Professores';
import AddNewProfessor from './pages/3Professores/AddNewProfessor';

import Cursos from './pages/4Cursos/Cursos';
import AddNewCurso from './pages/4Cursos/AddNewCurso';

import Turmas from './pages/5Turmas/Turmas';
import AddNewTurma from './pages/5Turmas/AddNewTurma';

import Settings from './pages/Settings';
import Logout from './pages/Logout';
import NotFoundPage from './pages/NotFound';


function App() {
  return (
    <>
     
      <BrowserRouter>
        <Navbar/>
        <Routes>
          {/* Páginas Inicial */}
          <Route path='/' exact element={<Dashboard/>}/>
          {/* Páginas Inicial */}

          {/* Páginas de Alunos */}
          <Route path='/alunos' exact element={<Alunos/>}/>
          <Route path='/add/new_aluno' exact element={<AddNewAluno/>}/>
          {/* Páginas de Alunos */}

          {/* Páginas de Alunos Prospectados */}
          <Route path='/alunos_prospectados' exact element={<AlunosProspectados/>}/>
          <Route path='/add/new_aluno_prospectado' exact element={<AddNewAlunoProspectado/>}/>
          {/* Páginas de Alunos Prospectados */}

          {/* Páginas de Professores */}
          <Route path='/professores' exact element={<Professores/>}/>
          <Route path='/add/new_professor' exact element={<AddNewProfessor/>}/>
          {/* Páginas de Professores */}

          {/* Páginas de Cursos */}
          <Route path='/cursos' exact element={<Cursos/>}/>
          <Route path='/add/new_curso' exact element={<AddNewCurso/>}/>
          {/* Páginas de Cursos */}

          {/* Páginas de Turmas */}
          <Route path='/turmas' exact element={<Turmas/>}/>
          <Route path='/add/new_turma' exact element={<AddNewTurma/>}/>
          {/* Páginas de Turmas */}

          {/* Páginas Gerais */}
          <Route path='/settings' exact element={<Settings/>}/>
          <Route path='/logout' exact element={<Logout/>}/>
          <Route path='*' exact element={<NotFoundPage/>}/>
          {/* Páginas Gerais */}
        </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;
