const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

function css(){
  return gulp
  .src('scss/app.component.scss')
  .pipe(autoprefixer({
    overrideBrowserslist : ['last 2 versions'],
    cascade: false
  }))
  .pipe(sass ({
    outputStyle: 'expanded',
  }))
  .pipe( gulp.dest('./app'))//destino

}

function cssmenuPrincipal(){
  return gulp
  .src('scss/menu-principal.component.scss')
  .pipe(autoprefixer({
    overrideBrowserslist : ['last 2 versions'],
    cascade: false
  }))
  .pipe(sass ({
    outputStyle: 'expanded',
  }))
  .pipe( gulp.dest('./app/components/menu-principal'))//destino

}

function cssSobreMi(){
  return gulp
  .src('scss/sobre-mi.component.scss')
  .pipe(autoprefixer({
    overrideBrowserslist : ['last 2 versions'],
    cascade: false
  }))
  .pipe(sass ({
    outputStyle: 'expanded',
  }))
  .pipe( gulp.dest('./app/components/sobre-mi'))//destino
}

function cssTrabajos(){
  return gulp
  .src('scss/trabajos.component.scss')
  .pipe(autoprefixer({
    overrideBrowserslist : ['last 2 versions'],
    cascade: false
  }))
  .pipe(sass ({
    outputStyle: 'expanded',
  }))
  .pipe( gulp.dest('./app/components/trabajos'))//destino
}

function cssHabilidades(){
  return gulp
  .src('scss/habilidades.component.scss')
  .pipe(autoprefixer({
    overrideBrowserslist : ['last 2 versions'],
    cascade: false
  }))
  .pipe(sass ({
    outputStyle: 'expanded',
  }))
  .pipe( gulp.dest('./app/components/habilidades'))//destino
}

function cssHabilidadesB(){
  return gulp
  .src('scss/habilidadesB.component.scss')
  .pipe(autoprefixer({
    overrideBrowserslist : ['last 2 versions'],
    cascade: false
  }))
  .pipe(sass ({
    outputStyle: 'expanded',
  }))
  .pipe( gulp.dest('./app/componentsBackend/habilidades'))//destino
}

function cssCurriculum(){
  return gulp
  .src('scss/curriculum.component.scss')
  .pipe(autoprefixer({
    overrideBrowserslist : ['last 2 versions'],
    cascade: false
  }))
  .pipe(sass ({
    outputStyle: 'expanded',
  }))
  .pipe( gulp.dest('./app/components/curriculum'))//destino
}

function cssCurriculumB(){
  return gulp
  .src('scss/curriculumB.component.scss')
  .pipe(autoprefixer({
    overrideBrowserslist : ['last 2 versions'],
    cascade: false
  }))
  .pipe(sass ({
    outputStyle: 'expanded',
  }))
  .pipe( gulp.dest('./app/componentsBackend/curriculum'))//destino
}

function cssContacto(){
  return gulp
  .src('scss/contacto.component.scss')
  .pipe(autoprefixer({
    overrideBrowserslist : ['last 2 versions'],
    cascade: false
  }))
  .pipe(sass ({
    outputStyle: 'expanded',
  }))
  .pipe( gulp.dest('./app/components/contacto'))//destino
}
function cssVerTrabajo(){
  return gulp
  .src('scss/VerTrabajo.component.scss')
  .pipe(autoprefixer({
    overrideBrowserslist : ['last 2 versions'],
    cascade: false
  }))
  .pipe(sass ({
    outputStyle: 'expanded',
  }))
  .pipe( gulp.dest('./app/components/ver-trabajos'))//destino
}

function cssDetail(){
  return gulp
  .src('scss/detail.component.scss')
  .pipe(autoprefixer({
    overrideBrowserslist : ['last 2 versions'],
    cascade: false
  }))
  .pipe(sass ({
    outputStyle: 'expanded',
  }))
  .pipe( gulp.dest('./app/components/detail'))//destino
}
function watchFiles(){
  gulp.watch('scss/*.scss', css)

  gulp.watch('scss/*.scss', cssmenuPrincipal)
  gulp.watch('scss/*.scss', cssVerTrabajo)
  gulp.watch('scss/*.scss', cssSobreMi)
  gulp.watch('scss/*.scss', cssTrabajos)
  gulp.watch('scss/*.scss', cssHabilidades)
  gulp.watch('scss/*.scss', cssHabilidadesB)
  gulp.watch('scss/*.scss', cssCurriculum)
  gulp.watch('scss/*.scss', cssCurriculumB)
  gulp.watch('scss/*.scss', cssContacto)
  gulp.watch('scss/*.scss', cssDetail)

  gulp.watch('./app/app.component.html')


}




//crear carpetas
gulp.task('css', css); //pag-principal
gulp.task('cssmenuPrincipal', cssmenuPrincipal); //pag-principal
gulp.task('cssSobreMi', cssSobreMi); //home
gulp.task('cssTrabajos', cssTrabajos); //show
gulp.task('cssHabilidades', cssHabilidades); //Comida
gulp.task('cssHabilidadesB', cssHabilidadesB);

gulp.task('cssCurriculum', cssCurriculum); //Juegos
gulp.task('cssCurriculumB', cssCurriculumB); //Juegos

gulp.task('cssContacto', cssContacto); //contacto
gulp.task('cssVerTrabajo', cssVerTrabajo); //VerTrabajos
gulp.task('cssDetail', cssDetail); //VerDetalles

//escuchar home
gulp.task('watch' , watchFiles)


//escuchar archivos generales
// gulp.task('watch' , watchFiles)
