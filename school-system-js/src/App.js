import Navbar from './components/sidebar/Navbar';
import './assets/js/main.js';
import './assets/css/index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dashboard from './pages/dashboard/Dashboard';

import Alunos from './pages/alunos/Alunos';
import AddNewAluno from './pages/alunos/AddNewAluno';
import ViewAluno from './pages/alunos/ViewAluno';
import EditAluno from './pages/alunos/EditAluno';

import AlunosProspectados from './pages/alunos/prospectados/AlunosProspectados';
import AddNewAlunoProspectado from './pages/alunos/prospectados/AddNewAlunoProspectado';

import Professores from './pages/professores/Professores';
import AddNewProfessor from './pages/professores/AddNewProfessor';

import Cursos from './pages/cursos/Cursos';
import AddNewCurso from './pages/cursos/AddNewCurso';

import Turmas from './pages/turmas/Turmas';
import AddNewTurma from './pages/turmas/AddNewTurma';

import Settings from './pages/Settings';
import Logout from './pages/Logout';
import NotFoundPage from './pages/NotFound';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Páginas Inicial */}
          <Route path='/' exact element={<Dashboard />} />
          {/* Páginas Inicial */}

          {/* Páginas de Alunos */}
          <Route path='/alunos' exact element={<Alunos />} />
          <Route path='/add/new_aluno' exact element={<AddNewAluno />} />
          <Route path={`/view_aluno/:matricula`} exact element={<ViewAluno />} />
          <Route path={`/edit_aluno/:matricula`} exact element={<EditAluno />} />
          {/* Páginas de Alunos */}

          {/* Páginas de Alunos Prospectados */}
          <Route path='/alunos_prospectados' exact element={<AlunosProspectados />} />
          <Route path='/add/new_aluno_prospectado' exact element={<AddNewAlunoProspectado />} />
          {/* Páginas de Alunos Prospectados */}

          {/* Páginas de Professores */}
          <Route path='/professores' exact element={<Professores />} />
          <Route path='/add/new_professor' exact element={<AddNewProfessor />} />
          {/* Páginas de Professores */}

          {/* Páginas de Cursos */}
          <Route path='/cursos' exact element={<Cursos />} />
          <Route path='/add/new_curso' exact element={<AddNewCurso />} />
          {/* Páginas de Cursos */}

          {/* Páginas de Turmas */}
          <Route path='/turmas' exact element={<Turmas />} />
          <Route path='/add/new_turma' exact element={<AddNewTurma />} />
          {/* Páginas de Turmas */}

          {/* Páginas Gerais */}
          <Route path='/settings' exact element={<Settings />} />
          <Route path='/logout' exact element={<Logout />} />
          <Route path='*' exact element={<NotFoundPage />} />
          {/* Páginas Gerais */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
