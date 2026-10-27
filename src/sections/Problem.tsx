import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'

export default function Problem() {
  return (
    <section id="problem" className="py-20">
      <Container>
        <SectionHeading eyebrow="Why" title="왜 바퀴벌레 제거부터 시작했나" />
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <p className="text-neutral-700 dark:text-neutral-300">
              NotMe는 &ldquo;이상하고 애매한 집안 문제&rdquo;를 전부 다루는 걸 최종 목표로 하지만, MVP는 하나의 가설만 검증하도록
              의도적으로 좁혔습니다.
            </p>
            <blockquote className="mt-6 rounded-2xl bg-primary/10 p-6 text-lg font-medium text-ink dark:text-neutral-100">
              &ldquo;사람들은 바퀴벌레가 나타났을 때, 앱으로 즉시 근처 사람에게 제거를 요청할 의향이 있는가?&rdquo;
            </blockquote>
          </div>
          <div className="space-y-4 text-neutral-700 dark:text-neutral-300">
            <p>
              스파이더, 벌, 무거운 짐, 높은 곳 전구 교체 같은 다른 카테고리는 전부 &ldquo;앞으로 확장 가능한 비전&rdquo;으로만
              남겨두고, 실제 개발은 바퀴벌레 제거 하나에 집중했습니다. 기능을 넓히는 대신 하나의 흐름을 끝까지 완성도 있게
              만드는 쪽을 택했습니다.
            </p>
            <p>
              리뷰는 User → Hero 단방향, 평점은 단순 산술 평균 — 둘 다 샘플이 적을 때의 변동성 같은 더 정교한 설계가
              가능하다는 걸 알면서도, 신호가 생기기 전까지는 일부러 보류한 결정입니다. &ldquo;지금 필요하지 않은 걸 먼저
              만들지 않는다&rdquo;는 원칙을 프로덕트 문서에도, 코드에도 동일하게 적용했습니다.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
