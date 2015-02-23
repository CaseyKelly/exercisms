class Squares
  def initialize(n)
    @n = n
  end

  def square_of_sums
    (1..@n).reduce(&:+) ** 2
  end
end
