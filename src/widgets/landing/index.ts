import styles from "./styles.module.scss"

export default function Landing() {
    return (
      <>
        <section className={styles.hero}>
          <div className={styles.container}>
            <h1>Инвестируйте в устойчивое будущее</h1>
            <p>
              GreenFinance делает ESG-инвестиции доступными для всех.
              Поддерживайте экологические и социальные проекты от 100 рублей и
              следите за своим вкладом в реальном времени.
            </p>
            <div className={styles.heroButtons}>
              <button className={styles.ctaButton}>Начать сейчас</button>
              <button className={styles.secondaryButton}>Узнать больше</button>
            </div>
          </div>
        </section>
  
        <section className={styles.features} id={styles.features}>
          <div className={styles.container}>
            <div className={styles.sectionTitle}>
              <h2>Как это работает</h2>
              <p>
                GreenFinance объединяет инвесторов и ESG-проекты, обеспечивая
                прозрачность и простоту участия
              </p>
            </div>
            <div className={styles.featureGrid}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🌱</div>
                <h3>Простота входа</h3>
                <p>
                  Начните инвестировать от 100 рублей через удобный интерфейс без
                  сложных процедур
                </p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>📊</div>
                <h3>ESG-рейтинги</h3>
                <p>
                  Прозрачная система оценки проектов по экологическим, социальным
                  и управленческим критериям
                </p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>👁️</div>
                <h3>AR-визуализация</h3>
                <p>
                  Смотрите, как ваши инвестиции меняют мир через дополненную
                  реальность
                </p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🎯</div>
                <h3>Персонализация</h3>
                <p>
                  Рекомендации проектов, соответствующих вашим интересам и
                  ценностям
                </p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🏆</div>
                <h3>Геймификация</h3>
                <p>Зарабатывайте бейджи и делитесь достижениями в соцсетях</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🔄</div>
                <h3>Автоматический трекинг</h3>
                <p>Отслеживайте совокупное влияние ваших инвестиций</p>
              </div>
            </div>
          </div>
        </section>
  
        <section className={styles.projects} id={styles.projects}>
          <div className={styles.container}>
            <div className={styles.sectionTitle}>
              <h2>Актуальные проекты</h2>
              <p>
                Выберите проект, который вас вдохновляет, и начните инвестировать
                уже сегодня
              </p>
            </div>
            <div className={styles.projectsGrid}>
              <div className={styles.projectCard}>
                <div
                  className={styles.projectImage}
                  style={{
                    backgroundImage: "url('https://via.placeholder.com/400x200')}"}}
                ></div>
                <div className={styles.projectInfo}>
                  <span className={styles.projectCategory}>Экология</span>
                  <h3>Солнечные электростанции в Сибири</h3>
                  <p>
                    Финансирование строительства солнечных электростанций в
                    отдаленных регионах
                  </p>
                  <div className={styles.progressBar}>
                    <div className={styles.progress}></div>
                  </div>
                  <div className={styles.projectStats}>
                    <div>65% собрано</div>
                    <div>2 340 500 ₽</div>
                  </div>
                </div>
              </div>
              <div className={styles.projectCard}>
                <div
                  className={styles.projectImage}
                  style={{
                    backgroundImage: "url('https://via.placeholder.com/400x200')}"
                  }}
                ></div>
                <div className={styles.projectInfo}>
                  <span className={styles.projectCategory}>Социальное</span>
                  <h3>Образовательные центры для детей</h3>
                  <p>
                    Создание сети образовательных центров в малых городах России
                  </p>
                  <div className={styles.progressBar}>
                    <div className={styles.progress} style={{ width: "40%" }}></div>
                  </div>
                  <div className={styles.projectStats}>
                    <div>40% собрано</div>
                    <div>1 200 000 ₽</div>
                  </div>
                </div>
              </div>
              <div className={styles.projectCard}>
                <div
                  className={styles.projectImage}
                  style={{
                    backgroundImage: "url('https://via.placeholder.com/400x200')}"
                  }}
                ></div>
                <div className={styles.projectInfo}>
                  <span className={styles.projectCategory}>Экология</span>
                  <h3>Переработка пластика в регионах</h3>
                  <p>
                    Развитие инфраструктуры для переработки пластиковых отходов
                  </p>
                  <div className={styles.progressBar}>
                    <div className={styles.progress} style={{ width: "85%" }}></div>
                  </div>
                  <div className={styles.projectStats}>
                    <div>85% собрано</div>
                    <div>4 250 000 ₽</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        <section className={styles.impact} id={styles.impact}>
          <div className={styles.container}>
            <div className={styles.sectionTitle}>
              <h2>Наш вклад в устойчивое развитие</h2>
              <p>
                Благодаря нашим инвесторам мы уже достигли значительных
                результатов
              </p>
            </div>
            <div className={styles.impactStats}>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>47</div>
                <div className={styles.statLabel}>реализованных проектов</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>25K+</div>
                <div className={styles.statLabel}>инвесторов</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>156M ₽</div>
                <div className={styles.statLabel}>привлеченных средств</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>12K+</div>
                <div className={styles.statLabel}>тонн CO2 нейтрализовано</div>
              </div>
            </div>
          </div>
        </section>
  
        <section className={styles.testimonials} id={styles.testimonials}>
          <div className={styles.container}>
            <div className={styles.sectioTitle}>
              <h2>Что говорят наши инвесторы</h2>
            </div>
            <div className={styles.testimonialSlider}>
              <p className={styles.testimonialText}>
                "Благодаря GreenFinance я смогла начать инвестировать в
                экологические проекты с небольших сумм. Теперь я вижу, как мои
                деньги приносят реальную пользу планете."
              </p>
              <p className={styles.testimonialAuthor}>- Анна, 28 лет</p>
            </div>
          </div>
        </section>
  
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <h2>Готовы изменить мир к лучшему?</h2>
            <p>
              Присоединяйтесь к сообществу ответственных инвесторов уже сегодня
            </p>
            <button className={styles.ctaButton}>Начать инвестировать</button>
          </div>
        </section>
      </>
    );
  }
  