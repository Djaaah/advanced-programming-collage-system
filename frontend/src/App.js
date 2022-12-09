import Navbar from './components/Sidebar/Navbar';
import './assets/js/main.js';
import './assets/css/index.css';
import {BrowserRouter, Routes , Route} from 'react-router-dom';

import Dashboard from './pages/dashboard/Dashboard';

import Alunos from './pages/alunos/Alunos';
import AddNewAluno from './pages/alunos/AddNewAluno';
import ViewAluno from './pages/alunos/ViewAluno';
import EditAluno from './pages/alunos/EditAluno';

import AlunosProspectados from './pages/alunos_prospectados/AlunosProspectados';
import AddNewAlunoProspectado from './pages/alunos_prospectados/AddNewAlunoProspectado';
import ViewAlunoProspectado from './pages/alunos_prospectados/ViewAlunoProspectado';
import EditAlunoProspectado from './pages/alunos_prospectados/EditAlunoProspectado';

import Professores from './pages/professores/Professores';
import AddNewProfessor from './pages/professores/AddNewProfessor';
import ViewProfessor from './pages/professores/ViewProfessor';
import EditProfessor from './pages/professores/EditProfessor';

import Cursos from './pages/cursos/Cursos';
import AddNewCurso from './pages/cursos/AddNewCurso';
import ViewCurso from './pages/cursos/ViewCurso';
import EditCurso from './pages/cursos/EditCurso';

import Turmas from './pages/turmas/Turmas';
import AddNewTurma from './pages/turmas/AddNewTurma';
import EditTurma from './pages/turmas/EditTurma';
import ViewTurma from './pages/turmas/ViewTurma';

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
          <Route path='/view_aluno/:matricula' exact element={<ViewAluno/>}/>
          <Route path='/edit_aluno/:matricula' exact element={<EditAluno/>}/>
          {/* Páginas de Alunos */}

          {/* Páginas de Alunos Prospectados */}
          <Route path='/alunos_prospectados' exact element={<AlunosProspectados/>}/>
          <Route path='/add/new_aluno_prospectado' exact element={<AddNewAlunoProspectado/>}/>
          <Route path='/view_lead/:idLead' exact element={<ViewAlunoProspectado/>}/>
          <Route path='/edit_lead/:idLead' exact element={<EditAlunoProspectado/>}/>
          {/* Páginas de Alunos Prospectados */}

          {/* Páginas de Professores */}
          <Route path='/professores' exact element={<Professores/>}/>
          <Route path='/add/new_professor' exact element={<AddNewProfessor/>}/>
          <Route path='/view_prof/:idProfessor' exact element={<ViewProfessor/>}/>
          <Route path='/edit_prof/:idProfessor' exact element={<EditProfessor/>}/>
          {/* Páginas de Professores */}

          {/* Páginas de Cursos */}
          <Route path='/cursos' exact element={<Cursos/>}/>
          <Route path='/add/new_curso' exact element={<AddNewCurso/>}/>
          <Route path='/view_curso/:idCurso' exact element={<ViewCurso/>}/>
          <Route path='/edit_curso/:idCurso' exact element={<EditCurso/>}/>
          {/* Páginas de Cursos */}

          {/* Páginas de Turmas */}
          <Route path='/turmas' exact element={<Turmas/>}/>
          <Route path='/add/new_turma' exact element={<AddNewTurma/>}/>
          <Route path={`/view_turma/:idTurma`} exact element={<ViewTurma/>}/>
          <Route path={`/edit_turma/:idTurma`} exact element={<EditTurma/>}/>
          {/* Páginas de Turmas */}

          {/* Páginas Gerais */}
          <Route path='*' exact element={<NotFoundPage/>}/>
          {/* Páginas Gerais */}
        </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;
